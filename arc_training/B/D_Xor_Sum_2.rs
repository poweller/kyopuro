//              D - Xor Sum 2
// ----------------------------------------
// 問題
// https://atcoder.jp/contests/abc098/tasks/arc098_b
// ----------------------------------------

// attributes
#![allow(unused_imports)]
#![allow(unused_variables)]
#![allow(non_snake_case)]
#![allow(dead_code)]
#![allow(unused_macros)]

// imports
use proconio::{
    fastout, input,
    marker::{Bytes, Chars, Usize1},
};
use std::cmp::{max, min, Reverse};
use std::collections::{BTreeMap, BTreeSet, BinaryHeap, HashMap, HashSet, VecDeque};

// constant
const MOD1: usize = 1_000_000_007;
const MOD9: usize = 998_244_353;
const INF: usize = 1001001001001001001;
const NEG1: usize = 1_usize.wrapping_neg();

/// ## 方針
/// - Ai <= 2^20 （結構小さめ？）
/// - **2進数で表したとき、各桁に対して高々1つの1が存在する時を考える**
/// - これによって、尺取り法で処理できる
fn main() {
    input! {
        N: usize,
        A: [usize; N],
    }
    
}