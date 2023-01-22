/// # linked_list
/// 連結リスト作成用マクロ
macro_rules! linked_list {
    ( $val:expr, $( $vals:expr ), * $(,)* ) => {{
        LinkedList::Node {
            val: $val,
            next: Box::new( linked_list!( $( $vals, )* ) ),
        }
    }};
    ( $val:expr $(,)* ) => {{
        LinkedList::Node {
            val: $val,
            next: Box::new( linked_list!() ),
        }
    }};
    () => {{
        LinkedList::Null   
    }};
}

/// # LinkedList
/// 連結リストのノード
#[derive(Debug)]
enum LinkedList<T> {
    Null,
    Node {
        val: T,
        next: Box<LinkedList<T>>,
    }   
}

impl<T> LinkedList<T>
where
    T: std::cmp::Eq
{
    /// ## replace
    /// `next`を引数で置き換える。
    fn replace(&mut self, node: Self) {
        *self = node;
    }

    /// ## remove
    /// ノードを削除する。
    fn remove(&mut self) {
        *self = LinkedList::Null;
    }

    // fn insert(&mut self, x: T) {
    //     // 新しく追加するノード
    //     let mut new_node = Box::new(
    //         LinkedList::Node { val: x, next: Box::new(LinkedList::Null) }
    //     );

    // }
}


fn main() {
    let mut list = linked_list!(1, 2, 3, 4);
    println!("{:?}", list);

    if let LinkedList::Node{ val, next } = &mut list {
        println!("置き換え前");
        println!("val: {}", val);
        println!("next: {:?}", next);

        // 置き換える
        let new_node = linked_list!(100);
        next.replace(new_node);

        println!("置き換え後");
        println!("val: {}", val);
        println!("next: {:?}", next);
    }

    println!("{:?}", list);

    if let LinkedList::Node{ val:_, next } = &mut list {
        next.remove();
    }

    println!("{:?}", list);

    list.remove();

    println!("{:?}", list);
}
