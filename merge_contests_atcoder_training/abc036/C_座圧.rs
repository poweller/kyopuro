//                  C - 座圧                 
// ----------------------------------------
// 問題
// https://atcoder.jp/contests/abc036/tasks/abc036_c
// ----------------------------------------

// attributes
#![allow(unused_imports)]
#![allow(unused_variables)]
#![allow(non_snake_case)]

// imports
// use proconio::{input, fastout};
use std::collections::{HashSet, BTreeMap, VecDeque, BinaryHeap};
use std::cmp::Reverse;

// input macro
// [Rustで競技プログラミング スターターキット](https://qiita.com/hatoo@github/items/fa14ad36a1b568d14f3e)
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


// solve
// #[fastout]
fn main() {
    let N = get!(usize);
    let A = get!(usize; N);

    // 重複要素を削除
    let unique_A = {
        let mut set = HashSet::new();
        for &a in &A {
            set.insert(a);
        }
        set
    };
    
    // ソート
    let comp_A = {
        let mut a: Vec<usize> = unique_A.into_iter().collect();
        a.sort();
        a
    };

    // Aの要素について二分探索
    for &a in &A {
        let res = comp_A.binary_search(&a).unwrap();
        println!("{}", res);
    }
}

