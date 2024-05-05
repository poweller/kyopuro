#![allow(unused_imports)]
#![allow(unused_variables)]
#![allow(non_snake_case)]
#![allow(dead_code)]
#![allow(unused_macros)]

use im_rc::HashMap;
use proconio::fastout;
use proconio::{input, marker::Usize1};

macro_rules! debug {
    ( $($val:expr),* $(,)* ) => {{
        #[cfg(debug_assertions)]
        eprintln!( concat!($(stringify!($val), " = {:?}, "),*), $($val),* );
    }};
}
macro_rules! debug2D {
    ( $array:expr ) => {{
        #![cfg(debug_assertions)]
        eprintln!("{}: ", stringify!($array));
        for row in &$array {
            eprintln!("{:?}", row);
        }
    }};
}

#[fastout]
fn main() {
    input! {
        N: usize,
        mut UVW: [(Usize1, Usize1, isize); N - 1],
        Q: usize
    }

    // グラフの構築
    let G = UVW.iter().fold(vec![vec![]; N], |mut g, &(u, v, _)| {
        g[u].push(v);
        g[v].push(u);
        g
    });

    // オイラーツアー
    let (in_, out, depth, depth_tour) = euler_tour_ordering(0, &G);

    debug!(in_);
    debug!(out);
    debug!(depth_tour);

    // セグ木
    let mut tour = SegmentTree::<Alg::Add>::new(2 * N);

    // 辺を区間に追加
    for &(mut u, mut v, w) in &UVW {
        if depth[u] > depth[v] {
            (u, v) = (v, u);
        }
        *tour.get_mut(in_[v]).unwrap() = w;
        *tour.get_mut(out[v]).unwrap() = -w;
    }

    debug!(tour);

    // LCA用のセグ木
    let lca_tour = SegmentTree::<Alg::MinPair>::from(&depth_tour);

    debug!(lca_tour);

    // クエリの処理
    for _ in 0..Q {
        input! { t: usize }
        match t {
            1 => {
                input! {
                    i: Usize1,
                    w: isize,
                }
                let (u, v, _) = UVW[i];
                let child = if depth[u] > depth[v] { u } else { v };
                let forward = in_[child];
                let backward = out[child];
                *tour.get_mut(forward).unwrap() = w;
                *tour.get_mut(backward).unwrap() = -w;
                debug!(tour);
            }
            2 => {
                input! {
                    mut u: Usize1,
                    mut v: Usize1,
                }
                if in_[u] > in_[v] {
                    (u, v) = (v, u);
                }
                let (_, lca) = lca_tour.get_range(in_[u]..=in_[v]);
                debug!(u, v, lca);
                // 和
                let to_u = tour.get_range(..=in_[u]);
                let to_v = tour.get_range(..=in_[v]);
                let to_lca = tour.get_range(..=in_[lca]);
                // パス
                let ans = to_u + to_v - to_lca * 2;
                println!("{ans}");
            }
            _ => unreachable!(),
        }
    }
}

/// オイラーツアーを行う
/// ### 戻り値
/// `(in, out): (Vec<usize>, Vec<usize>)`
/// - `in[i]`: 頂点iを最初に通った時刻
/// - `out[i]`: 頂点iを最後に通った時刻
pub fn euler_tour_ordering(
    root: usize,
    G: &Vec<Vec<usize>>,
) -> (Vec<usize>, Vec<usize>, Vec<usize>, Vec<(usize, usize)>) {
    let N = G.len();
    let mut in_ = vec![usize::MAX; N];
    let mut out = vec![usize::MAX; N];
    let mut depth = vec![0; N];
    let mut depth_tour = vec![];
    dfs(
        N,
        root,
        &mut 0,
        0,
        G,
        &mut in_,
        &mut out,
        &mut depth,
        &mut depth_tour,
    );
    (in_, out, depth, depth_tour)
}

fn dfs(
    p: usize,
    u: usize,
    id: &mut usize,
    d: usize,
    G: &Vec<Vec<usize>>,
    in_: &mut [usize],
    out: &mut [usize],
    depth: &mut Vec<usize>,
    depth_tour: &mut Vec<(usize, usize)>,
) {
    in_[u] = *id;
    depth[u] = d;
    depth_tour.push((d, u));
    for &v in &G[u] {
        if v == p {
            continue;
        }
        *id += 1;
        dfs(u, v, id, d + 1, G, in_, out, depth, depth_tour);
        depth_tour.push((d, u));
    }
    *id += 1;
    out[u] = *id;
}

const INF: usize = 1001001001001001001;

use std::fmt;
use std::ops::{
    Bound::{Excluded, Included, Unbounded},
    Deref, DerefMut, Index, RangeBounds,
};
/// モノイド
pub trait Monoid {
    /// 元の型
    type Val: fmt::Debug + Clone + PartialEq;
    /// 単位元
    const E: Self::Val;
    /// 演算
    fn op(left: &Self::Val, right: &Self::Val) -> Self::Val;
}
/// # SegmentTree (Monoid)
/// - 抽象化セグメント木
pub struct SegmentTree<T: Monoid> {
    pub size: usize,
    offset: usize,
    data: Vec<T::Val>,
}
impl<T: Monoid> Index<usize> for SegmentTree<T> {
    type Output = T::Val;
    fn index(&self, idx: usize) -> &Self::Output {
        &self.data[self.offset + idx]
    }
}
impl<T: Monoid> SegmentTree<T> {
    #[inline]
    fn parse_range<R: RangeBounds<usize>>(&self, range: &R) -> Option<(usize, usize)> {
        let start = match range.start_bound() {
            Unbounded => 0,
            Excluded(&v) => v + 1,
            Included(&v) => v,
        };
        let end = match range.end_bound() {
            Unbounded => self.size,
            Excluded(&v) => v,
            Included(&v) => v + 1,
        };
        if start <= end && end <= self.size {
            Some((start, end))
        } else {
            None
        }
    }
    /// ## new
    /// セグメント木を初期化する
    pub fn new(n: usize) -> Self {
        let offset = n.next_power_of_two();
        Self {
            size: n,
            offset,
            data: vec![T::E; offset << 1],
        }
    }
    fn update(&mut self, index: usize, value: T::Val) {
        let mut i = index + self.offset;
        self.data[i] = value;
        while i > 1 {
            i >>= 1;
            let lch = i << 1;
            self.data[i] = T::op(&self.data[lch], &self.data[lch + 1]);
        }
    }
    /// 可変な参照を返す
    pub fn get_mut(&mut self, i: usize) -> Option<ValMut<'_, T>> {
        if i < self.offset {
            let default = self.index(i).clone();
            Some(ValMut {
                segtree: self,
                idx: i,
                new_val: default,
            })
        } else {
            None
        }
    }
    /// 区間`range`の集約を行う
    pub fn get_range<R: RangeBounds<usize> + fmt::Debug>(&self, range: R) -> T::Val {
        let Some((start, end)) = self.parse_range(&range) else {
            panic!("The given range is wrong: {:?}", range);
        };
        // 全体の値を取得
        if (start, end) == (0, self.size) {
            return self.data[1].clone();
        }
        // 値の取得
        let mut l = self.offset + start;
        let mut r = self.offset + end;
        let (mut res_l, mut res_r) = (T::E, T::E);
        while l < r {
            if l & 1 == 1 {
                res_l = T::op(&res_l, &self.data[l]);
                l += 1;
            }
            if r & 1 == 1 {
                r -= 1;
                res_r = T::op(&self.data[r], &res_r);
            }
            l >>= 1;
            r >>= 1;
        }
        T::op(&res_l, &res_r)
    }
}
impl<T: Monoid> From<&Vec<T::Val>> for SegmentTree<T> {
    fn from(src: &Vec<T::Val>) -> Self {
        let mut seg = Self::new(src.len());
        for (i, v) in src.iter().enumerate() {
            seg.data[seg.offset + i] = v.clone();
        }
        for i in (0..seg.offset).rev() {
            let lch = i << 1;
            seg.data[i] = T::op(&seg.data[lch], &seg.data[lch + 1]);
        }
        seg
    }
}
impl<T: Monoid> std::fmt::Debug for SegmentTree<T> {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        write!(f, "SegmentTree {{ [").ok();
        for i in 0..self.size {
            if i + 1 < self.size {
                write!(f, "{:?}, ", self.data[self.offset + i]).ok();
            } else {
                write!(f, "{:?}", self.data[self.offset + i]).ok();
            }
        }
        write!(f, "] }}")
    }
}
pub struct ValMut<'a, T: 'a + Monoid> {
    segtree: &'a mut SegmentTree<T>,
    idx: usize,
    new_val: T::Val,
}
impl<T: Monoid> fmt::Debug for ValMut<'_, T> {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        f.debug_tuple("ValMut")
            .field(&self.segtree.index(self.idx))
            .finish()
    }
}
impl<T: Monoid> Drop for ValMut<'_, T> {
    fn drop(&mut self) {
        self.segtree.update(self.idx, self.new_val.clone());
    }
}
impl<T: Monoid> Deref for ValMut<'_, T> {
    type Target = T::Val;
    fn deref(&self) -> &Self::Target {
        &self.segtree[self.idx]
    }
}
impl<T: Monoid> DerefMut for ValMut<'_, T> {
    fn deref_mut(&mut self) -> &mut Self::Target {
        &mut self.new_val
    }
}
/// さまざまな代数的構造
pub mod Alg {
    use super::Monoid;
    /// 和
    pub struct Add;
    impl Monoid for Add {
        type Val = isize;
        const E: Self::Val = 0;
        fn op(left: &Self::Val, right: &Self::Val) -> Self::Val {
            left + right
        }
    }
    /// 積
    pub struct Mul;
    impl Monoid for Mul {
        type Val = isize;
        const E: Self::Val = 1;
        fn op(left: &Self::Val, right: &Self::Val) -> Self::Val {
            left * right
        }
    }
    /// bit単位の排他的論理和
    pub struct Xor;
    impl Monoid for Xor {
        type Val = usize;
        const E: Self::Val = 0;
        fn op(left: &Self::Val, right: &Self::Val) -> Self::Val {
            left ^ right
        }
    }
    /// 最小値
    pub struct MinPair;
    impl Monoid for MinPair {
        type Val = (usize, usize);
        const E: Self::Val = (usize::MAX, usize::MAX);
        fn op(left: &Self::Val, right: &Self::Val) -> Self::Val {
            *left.min(right)
        }
    }
    /// 最大値
    pub struct Max;
    impl Monoid for Max {
        type Val = isize;
        const E: Self::Val = -((1 << 31) - 1);
        fn op(left: &Self::Val, right: &Self::Val) -> Self::Val {
            *left.max(right)
        }
    }
    /// 最小公倍数
    pub struct GCD;
    impl Monoid for GCD {
        type Val = usize;
        const E: Self::Val = 0;
        fn op(left: &Self::Val, right: &Self::Val) -> Self::Val {
            gcd(*left, *right)
        }
    }
    pub fn gcd(a: usize, b: usize) -> usize {
        if b == 0 {
            a
        } else {
            gcd(b, a % b)
        }
    }
    // use super::Modint;
    // /// あまりをとる和
    // pub struct ModAdd;
    // impl Monoid for ModAdd {
    //	 type Val = Modint<998244353>;
    //	 const E: Self::Val = Modint::<998244353>(0);
    //	 fn op(left: &Self::Val, right: &Self::Val) -> Self::Val {
    //		 *left + *right
    //	 }
    // }
    // /// あまりをとる積
    // pub struct ModMul;
    // impl Monoid for ModMul {
    //	 type Val = Modint<998244353>;
    //	 const E: Self::Val = Modint::<998244353>(1);
    //	 fn op(left: &Self::Val, right: &Self::Val) -> Self::Val {
    //		 *left * *right
    //	 }
    // }
}
