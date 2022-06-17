class TreeNode
{
    constructor(data) {
       this.left = null;
       this.right = null;
       this.data = data;
    }
}
 

function countLeaves(TreeNode)
{
    if(TreeNode == null)    
        return 0;
    if(TreeNode.left == null && TreeNode.right == null)
        return 1;        
    else
        return countLeaves(TreeNode.left)+
        countLeaves(TreeNode.right);
}