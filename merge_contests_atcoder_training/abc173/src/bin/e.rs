// attributes
#![allow(unused_imports)]
#![allow(unused_variables)]
#![allow(non_snake_case)]
#![allow(dead_code)]
#![allow(unused_macros)]

// imports
use itertools::Itertools;
use proconio::{
    input,
    marker::{Bytes, Chars, Usize1},
};

macro_rules! debug {
    ( $($val:expr),* $(,)* ) => {{
        #[cfg(debug_assertions)]
        eprintln!( concat!($(stringify!($val), " = {:?}, "),*), $($val),* );
    }};
}

#[rustfmt::skip]
pub mod modint {
    use std::{fmt::Display,ops::{Add, AddAssign, Div, Mul, MulAssign, Neg, Sub, SubAssign}, str::FromStr, num::ParseIntError};
    #[derive(Clone, Copy, Debug, Default, PartialEq, Eq)] pub struct Modint<const MOD: usize>(pub usize);
    impl<const MOD: usize> Modint<MOD> { pub fn new(n: usize) -> Self { Self(if n < MOD { n } else { n % MOD }) } }
    impl<const MOD: usize> Neg for Modint<MOD> { type Output = Self; fn neg(self) -> Self { Modint(if self.0 == 0 { 0 } else { MOD - self.0 }) } }
    impl<const MOD: usize> Add for Modint<MOD> { type Output = Self; fn add(self, rhs: Self) -> Self { let mut res = self.0 + rhs.0; if res >= MOD { res -= MOD; } Modint(res) } }
    impl<const MOD: usize> Sub for Modint<MOD> { type Output = Self; fn sub(self, rhs: Self) -> Self { self + (- rhs) } }
    impl<const MOD: usize> Mul for Modint<MOD> { type Output = Self; fn mul(self, rhs: Self) -> Self { Modint(self.0 * rhs.0 % MOD) } }
    impl<const MOD: usize> Div for Modint<MOD> { type Output = Self; fn div(self, rhs: Self) -> Self { self * rhs.inv() } }
    impl<const MOD: usize> AddAssign for Modint<MOD> { fn add_assign(&mut self, rhs: Self) { self.0 = (*self + rhs).0 } }
    impl<const MOD: usize> SubAssign for Modint<MOD> { fn sub_assign(&mut self, rhs: Self) { self.0 = (*self - rhs).0 } }
    impl<const MOD: usize> MulAssign for Modint<MOD> { fn mul_assign(&mut self, rhs: Self) { self.0 = (*self * rhs).0 } }
    impl<const MOD: usize> From<usize> for Modint<MOD> { fn from(value: usize) -> Self { Modint::new(value) } }
    impl<const MOD: usize> Add<usize> for Modint<MOD> { type Output = Self; fn add(self, rhs: usize) -> Self { let mut res = self.0 + rhs; if res >= MOD {res -= MOD;} Modint(res) } }
    impl<const MOD: usize> Sub<usize> for Modint<MOD> { type Output = Self; fn sub(self, rhs: usize) -> Self { self - Modint::new(rhs) } }
    impl<const MOD: usize> Mul<usize> for Modint<MOD> { type Output = Self; fn mul(self, rhs: usize) -> Self { self * Modint::new(rhs) } }
    impl<const MOD: usize> Div<usize> for Modint<MOD> { type Output = Self; fn div(self, rhs: usize) -> Self { self / Modint::new(rhs) } }
    impl<const MOD: usize> AddAssign<usize> for Modint<MOD> { fn add_assign(&mut self, rhs: usize) { *self += Modint::new(rhs) } }
    impl<const MOD: usize> SubAssign<usize> for Modint<MOD> { fn sub_assign(&mut self, rhs: usize) { *self -= Modint::new(rhs) } }
    impl<const MOD: usize> MulAssign<usize> for Modint<MOD> { fn mul_assign(&mut self, rhs: usize) { *self *= Modint::new(rhs) } }
    impl<const MOD: usize> Display for Modint<MOD> { fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result { write!(f, "{}", self.0) } }
    impl<const MOD: usize> PartialEq<usize> for Modint<MOD> { fn eq(&self, other: &usize) -> bool { self == &Modint::new(*other) } }
    impl<const MOD: usize> FromStr for Modint<MOD> { type Err = ParseIntError; fn from_str(s: &str) -> Result<Self, Self::Err> { usize::from_str(s).map(Modint::new) } }
    pub trait Fp { fn pow(&self, rhs: usize) -> Self; fn inv(&self) -> Self; }
    impl<const MOD: usize> Fp for Modint<MOD> { fn pow(&self, rhs: usize) -> Self { let (mut a, mut b) = (self.0, rhs); let mut res = 1; while b > 0 { if b & 1 == 1 { res = (res * a) % MOD; } a = (a * a) % MOD; b >>= 1u32; } Modint(res) } fn inv(&self) -> Self { self.pow(MOD - 2) } }
}
use modint::*;
pub type Mod998 = Modint<998244353>;
pub type Mod1e9 = Modint<1000000007>;

fn main() {
    input! {
        N: usize,
        K: usize,
        mut A: [isize; N]
    }

    if N == K {
        let mut ans = Mod1e9::new(1);
        let mut sgn = 1;
        for &a in &A {
            ans *= a.abs() as usize;
            sgn *= a.signum();
        }
        if sgn >= 0 {
            println!("{}", ans);
        } else {
            println!("{}", -ans);
        }
        return;
    }

    // 絶対値の降順にソート
    A.sort_by_key(|&x| -x.abs());

    // Kが奇数かつAの要素が全て負の場合
    if K % 2 == 1 && A.iter().all(|&x| x < 0) {
        // 絶対値が小さいものからK個とる
        let neg_max = A
            .iter()
            .rev()
            .take(K)
            .fold(Mod1e9::new(1), |acc, x| acc * x.abs() as usize);
        println!("{}", -neg_max);
        return;
    }

    // 先頭K個の積
    let tmp = A[..K]
        .iter()
        .fold(Mod1e9::new(1), |acc, x| acc * x.abs() as usize);

    // 先頭K個がすでに正である場合
    if A[..K].iter().map(|&v| v.signum()).product::<isize>() >= 0 {
        println!("{}", tmp);
        return;
    }

    // パターン1:
    // del: 採用されているものの中で最も小さい負の数
    let min_neg = A[..K].iter().rev().find(|&&x| x <= 0);
    // add: 採用されてないものの中で最も大きい正の数
    let max_pos = A[K..].iter().find(|&&x| x >= 0);

    // パターン2:
    // del: 採用されているものの中で最も小さい正の数
    let min_pos = A[..K].iter().rev().find(|&&x| x >= 0);
    // add: 採用されてないものの中で最も大きい負の数
    let max_neg = A[K..].iter().find(|&&x| x <= 0);

    debug!(min_neg, min_pos, max_neg, max_pos);

    let ans = match (min_neg.and(max_pos), min_pos.and(max_neg)) {
        (Some(_), Some(_)) => {
            let mine = min_neg.unwrap().abs() as usize;
            let mapo = max_pos.unwrap().abs() as usize;
            let mipo = min_pos.unwrap().abs() as usize;
            let mane = max_neg.unwrap().abs() as usize;
            if mapo * mipo > mane * mine {
                tmp * mapo / mine
            } else {
                tmp * mane / mipo
            }
        }
        (Some(_), None) => {
            let mine = min_neg.unwrap().abs() as usize;
            let mapo = max_pos.unwrap().abs() as usize;
            tmp * mapo / mine
        }
        (None, Some(_)) => {
            let mipo = min_pos.unwrap().abs() as usize;
            let mane = max_neg.unwrap().abs() as usize;
            tmp * mane / mipo
        }
        _ => unreachable!(),
    };

    println!("{}", ans);
}
