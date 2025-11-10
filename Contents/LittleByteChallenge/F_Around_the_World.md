# F - Around the World

> **Problem Summary:** Calculate the minimum cost to travel around the world.

> **问题摘要：** 计算环游世界的最低费用。

## Background

You are planning a trip around the world. There are $n$ cities, and you can travel between them using $m$ direct flights. Each flight has a cost associated with it.

你正在计划一次环游世界的旅行。有 $n$ 个城市，你可以通过 $m$ 条直飞航班在它们之间旅行。每条航班都有相应的费用。

You want to start in any city, visit all the cities at least once, and return to the starting city. Your goal is to minimize the total cost of the trip.

你希望从任意一个城市出发，至少访问所有城市一次，并返回起始城市。你的目标是使旅行的总费用最小化。

## Problem Description

You are given a graph with $n$ nodes (cities) and $m$ edges (flights). Each edge has a weight (cost). Find the minimum cost to complete the trip.

给定一个包含 $n$ 个节点（城市）和 $m$ 条边（航班）的图。每条边都有一个权重（费用）。求完成旅行的最低费用。

## Input Format

The first line contains two integers $n$ and $m$ ($2 \leq n \leq 15$, $1 \leq m \leq n(n-1)/2$), the number of cities and flights.

第一行包含两个整数 $n$ 和 $m$ ($2 \leq n \leq 15$, $1 \leq m \leq n(n-1)/2$)，表示城市和航班的数量。

The next $m$ lines each contain three integers $u$, $v$, and $w$ ($1 \leq u, v \leq n$, $1 \leq w \leq 10^4$), representing a flight between cities $u$ and $v$ with cost $w$.

接下来的 $m$ 行每行包含三个整数 $u$, $v$, 和 $w$ ($1 \leq u, v \leq n$, $1 \leq w \leq 10^4$)，表示城市 $u$ 和 $v$ 之间的一条航班及其费用 $w$。

## Output Format

Output a single integer, the minimum cost to complete the trip. If it is not possible to visit all cities, output $-1$.

输出一个整数，表示完成旅行的最低费用。如果无法访问所有城市，输出 $-1$。

## Sample Input

```
4 6
1 2 10
1 3 15
1 4 20
2 3 35
2 4 25
3 4 30
```

## Sample Output

```
80
```

## Sample Explanation

The optimal route is $1 \to 2 \to 4 \to 3 \to 1$, with a total cost of $10 + 25 + 30 + 15 = 80$.

最优路线是 $1 \to 2 \to 4 \to 3 \to 1$，总费用为 $10 + 25 + 30 + 15 = 80$。

## Constraints

- The graph is undirected.
- There are no self-loops or multiple edges between the same pair of nodes.

- 图是无向的。
- 不存在自环或同一对节点之间的多条边。

## Standard Code

```cpp

```
