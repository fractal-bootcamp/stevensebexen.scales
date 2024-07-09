#include "stdbool.h"
#include "stdio.h"

int maxProfitR(int* prices, int pricesSize, int accumulator, bool ownsStock) {
  if (pricesSize <= 0) {
    return accumulator;
  }
  int delta = ownsStock ? prices[0] : -prices[0];
  /* The profit if you neither buy nor sell */
  int profitNoAction = maxProfitR(prices + 1, pricesSize - 1, accumulator, ownsStock);
  /* The profit if you buy or sell today; there's never a reason to take multiple actions on the same day. */
  int profitAction = maxProfitR(prices + 1, pricesSize - 1, accumulator + delta, !ownsStock);
  
  return profitNoAction > profitAction ? profitNoAction : profitAction;
}

int maxProfit(int* prices, int pricesSize) {
  return maxProfitR(prices, pricesSize, 0, false);
}

int main() {
  int prices0[] = {7, 1, 5, 3, 6, 4};  /* Buy 2 (-1), Sell 3 (+5), buy 4 (-3), sell 5 (+6), Profit 7 */
  int prices1[] = {1, 2, 3, 4, 5};  /* Buy 1 (-1), Sell 5 (+5), Profit 4 */
  int prices2[] = {7, 6, 4, 3, 1};  /* Do nothing, Profit 0 */

  int result0 = maxProfit(prices0, 6);
  int result1 = maxProfit(prices1, 5);
  int result2 = maxProfit(prices2, 5);

  printf("%d, %d, %d\n", result0, result1, result2);
}