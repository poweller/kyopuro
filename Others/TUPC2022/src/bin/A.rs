// attributes
#![allow(unused_imports)]
#![allow(unused_variables)]
#![allow(non_snake_case)]
#![allow(dead_code)]
#![allow(unused_macros)]

// imports
use std::cmp::{max, min, Reverse};
use std::collections::{BTreeMap, BTreeSet, BinaryHeap, HashMap, HashSet, VecDeque};
use proconio::{input, fastout, marker::{Chars, Bytes, Usize1}};

// constant
const MOD1: usize = 1_000_000_007;
const MOD9: usize = 998_244_353;
const INF: usize = 1001001001001001001;
const NEG1: usize = 1_usize.wrapping_neg();

// solve
fn main() {
    input! {
        N: usize,
        K: usize,
        P: [usize; N],
    }

    let mut isOK = true;

    // K 以上の要素がソート済みであるかどうか調べる
    for (i, &v) in P.iter().enumerate() {
        isOK &= i < K - 1 || v == i+1;
    }

    if isOK {
        println!("Yes");
    } else {
        println!("No");
    }
}