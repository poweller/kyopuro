//                D - Knight               
// ----------------------------------------
// 問題
// https://atcoder.jp/contests/abc145/tasks/abc145_d
// ----------------------------------------

// attributes
#![allow(unused_imports)]
#![allow(unused_variables)]
#![allow(non_snake_case)]
#![allow(dead_code)]
#![allow(unused_macros)]

// imports
// https://qiita.com/hatoo@github/items/fa14ad36a1b568d14f3e
use std::cmp::{max, min, Reverse};
use std::collections::{BTreeMap, BTreeSet, BinaryHeap, HashMap, HashSet, VecDeque};

// input macro
macro_rules! get {
    ($t:ty) => {
        {
            let mut line = String::new();
            std::io::stdin().read_line(&mut line).unwrap();
            line.trim().parse::<$t>().unwrap()
        }
    };
    ($($t:ty),*) => {
        {
            let mut line = String::new();
            std::io::stdin().read_line(&mut line).unwrap();
            let mut iter = line.split_whitespace();
            (
                $(iter.next().unwrap().parse::<$t>().unwrap(),)*
            )
        }
    };
    ($($t:ty);*) => {
        (
            $(get!($t),)*
        )
    };
    ($t:ty ; $n:expr) => {
        (0..$n).map(|_|
            get!($t)
        ).collect::<Vec<_>>()
    };
    ($($t:ty),* ; $n:expr) => {
        (0..$n).map(|_|
            get!($($t),*)
        ).collect::<Vec<_>>()
    };
    ($t:ty ;;) => {
        {
            let mut line = String::new();
            std::io::stdin().read_line(&mut line).unwrap();
            line.split_whitespace()
                .map(|t| t.parse::<$t>().unwrap())
                .collect::<Vec<_>>()
        }
    };
    ($t:ty ;; $n:expr) => {
        (0..$n).map(|_|
            get!($t ;;)
        ).collect::<Vec<_>>()
    };
}

/// ## Modint
/// 有限体の実装
trait Modint {
    fn val(&self) -> usize;
    fn madd(&self, other: usize) -> usize;
    fn mneg(&self) -> usize;
    fn msub(&self, other: usize) -> usize;
    fn mmul(&self, other: usize) -> usize;
    fn minv(&self) -> usize;
    fn mdiv(&self, other: usize) -> usize;
    fn mpow(&self, other: usize) -> usize;
    fn factorial(&self) -> usize;
}

impl Modint for usize {
    fn val(&self) -> usize {
        self % MOD
    }

    fn madd(&self, other: usize) -> usize {
        (self.val() + other.val()).val()
    }

    fn mneg(&self) -> usize {
        (MOD - self.val()).val()
    }

    fn msub(&self, other: usize) -> usize {
        self.madd(other.mneg())
    }

    fn mmul(&self, other: usize) -> usize {
        (self.val() * other.val()).val()
    }

    fn mpow(&self, other: usize) -> usize {
        let (mut a, mut b) = (self.val(), other);
        let mut res = 1;
        while b > 0 {
            if b & 1 == 1 {
                res = res.mmul(a);
            }
            a = a.mmul(a);
            b >>= 1;
        }
        res
    }

    fn minv(&self) -> usize{
        assert!(*self != 0);
        self.mpow(MOD - 2)
    }

    fn mdiv(&self, other: usize) -> usize {
        self.mmul(other.minv())
    }

    fn factorial(&self) -> usize {
        (1..=*self).fold(1, |acc, v| acc.mmul(v))
    }
}

// constant
const MOD: usize = 1_000_000_007;
// const MOD9: usize = 998_244_353;
const INF: usize = 1001001001001001001;

// solve
fn main() {
    let (X, Y) = get!(usize, usize);

    if (2*X - Y) % 3 != 0 || (2*Y - X) % 3 != 0 {
        println!("0");
        return;
    }

    let a = (2*Y - X) / 3;  // `(1,2)`を行う回数
    let b = (2*X - Y) / 3;  // `(2,1)`を行う回数

    let fact_a = a.factorial();
    let fact_b = b.factorial();
    let fact_a_b = (a+b).factorial();

    let ans = fact_a_b.mdiv(fact_a).mdiv(fact_b);

    println!("{}", ans);
}
