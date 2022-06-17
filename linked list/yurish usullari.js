const linkedList = {
    val: 1,
    next: {
      val: 2,
      next: {
        val: 3,
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