#include "stdbool.h"
#include "stdio.h"

struct TreeNode {
  int val;
  struct TreeNode *left;
  struct TreeNode *right;
};

bool pathSum(struct TreeNode* root, int targetSum, int accumulator) {
  if (root->left == NULL && root->right == NULL) {
    return ((accumulator + root->val) == targetSum);
  }
  return (
    (root->left != NULL && pathSum(root->left, targetSum, accumulator + root->val))
    || (root->right != NULL && pathSum(root->right, targetSum, accumulator + root->val))
  );
}

bool hasPathSum(struct TreeNode* root, int targetSum) {
  return pathSum(root, targetSum, 0);
}

int main() {
  struct TreeNode node8 = {1, NULL, NULL};
  struct TreeNode node7 = {2, NULL, NULL};
  struct TreeNode node6 = {7, NULL, NULL};
  struct TreeNode node5 = {4, NULL, &node8};
  struct TreeNode node4 = {13, NULL, NULL};
  struct TreeNode node3 = {11, &node6, &node7};
  struct TreeNode node2 = {8, &node4, &node5};
  struct TreeNode node1 = {4, &node3, NULL};
  struct TreeNode node0 = {5, &node1, &node2};

  bool result0 = hasPathSum(&node0, 26);  /* 1 */
  bool result1 = hasPathSum(&node0, 5);  /* 0 */
  bool result2 = hasPathSum(&node0, 18); /* 1 */
  bool result3 = hasPathSum(&node1, 17); /* 1 */
  bool result4 = hasPathSum(&node0, 20); /* 0 */

  printf("%d, %d, %d, %d, %d\n", result0, result1, result2, result3, result4);
}