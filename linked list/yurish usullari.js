const linkedList = {
    val: 5,
    next: {
      val: 3,
      next: {
        val: 10,
        next: null,
      },
    },
  };
function printList(linkedList) 
{ 
    while (linkedList != null) 
    { 
        console.log(linkedList.val)
        linkedList = linkedList.next; 
    } 

} 