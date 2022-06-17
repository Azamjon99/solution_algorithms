function reverse(head) {
    let prev = null
    while(head){
        const next = head.next
        head.next = prev
        prev = head
        head = next
    }
    return pre
};