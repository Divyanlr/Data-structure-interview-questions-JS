function isValidBST(root) {
    function validate(node, low, high) {
        if (!node) return true;
        if ((low !== null && node.val <= low) || (high !== null && node.val >= high)) return false;
        return validate(node.left, low, node.val) && validate(node.right, node.val, high);
    }
    return validate(root, null, null);
}
