# C - Database

> **Problem Summary:** Extract the longest consecutive sequence of digits from a string.

> **问题摘要：** 从字符串中提取最长的连续数字序列。

## Background

Baicen LIU, the president of UNNC's Computer Psycho Union (CPU), assigned Robert the task of analyzing freshmen enrollment data for the new academic year. The database contains important information like student IDs, admission scores, and contact numbers.

刘百岑，宁波诺丁汉大学计算机心理协会（CPU）的主席，给罗伯特布置了一项任务，分析新学年的新生入学数据。数据库包含学生学号、入学成绩和联系方式等重要信息。

However, disaster struck! When Robert attempted to export the data, a critical system error occurred. Instead of neat columns and rows, the entire database got jumbled into a single corrupted string. Student IDs merged with phone numbers, admission scores mixed with dormitory room numbers, and everything became an incomprehensible mess of digits, letters, and special characters.

然而，灾难发生了！当罗伯特尝试导出数据时，系统发生了严重错误。整个数据库变成了一串混乱的字符串，学生学号与电话号码混在一起，入学成绩与宿舍房号混在一起，一切都变成了难以理解的数字、字母和特殊字符的混合体。

"This is terrible!" Robert exclaimed, staring at the garbled output on his screen.

“这太糟糕了！”罗伯特惊呼，盯着屏幕上的乱码。

Your task is to help Robert extract the longest consecutive sequence of digits from the corrupted data string.

你的任务是帮助罗伯特从损坏的数据字符串中提取最长的连续数字序列。

## Problem Description

Given a string $S$ consisting of lowercase letters, uppercase letters, digits, and special characters, find the **longest consecutive sequence of digits** and output it as an integer.

给定一个由小写字母、大写字母、数字和特殊字符组成的字符串 $S$，找到**最长的连续数字序列**并将其作为整数输出。

If there are multiple sequences of the same maximum length, output the **largest** one numerically.

如果有多个长度相同的序列，输出数值上最大的一个。

If there are no digits in the string, output $-1$.

如果字符串中没有数字，输出 $-1$。

## Input Format

The first line contains an integer $T$ ($1 \le T \le 100$), the number of test cases.

第一行包含一个整数 $T$ ($1 \le T \le 100$)，表示测试用例的数量。

Each of the next $T$ lines contains a string $S$ ($1 \le |S| \le 10^{5}$), representing the corrupted data.

接下来的 $T$ 行每行包含一个字符串 $S$ ($1 \le |S| \le 10^{5}$)，表示损坏的数据。

$S$ consists of:
- Lowercase letters ($a$-$z$)
- Uppercase letters ($A$-$Z$)
- Digits ($0$-$9$)
- Special characters (space, `.`, `-`, `@`, `#`, etc.)

$S$ 由以下字符组成：
- 小写字母 ($a$-$z$)
- 大写字母 ($A$-$Z$)
- 数字 ($0$-$9$)
- 特殊字符（空格, `.`, `-`, `@`, `#` 等）

## Output Format

For each test case, output a single integer representing the longest consecutive sequence of digits.

对于每个测试用例，输出一个整数，表示最长的连续数字序列。

If there are multiple sequences with the same maximum length, output the numerically largest one.

如果有多个长度相同的序列，输出数值上最大的一个。

If no digits exist in the string, output $-1$.

如果字符串中没有数字，输出 $-1$。

## Sample Input

```
5
abc123xyz456def
StudentID:20241001,Score:98,Phone:13812345678
Hello@World!
Room305-Phone:1234567-Grade:95
a1b2c3d4e5f6g7h8i9j0
```

## Sample Output

```
456
13812345678
-1
1234567
9
```

## Sample Explanation

**Test Case 1:** `abc123xyz456def`
- Digit sequences: `123`, `456`
- Maximum length: $3$
- Both have length $3$, so output the larger: $456$

**测试用例 1：** `abc123xyz456def`
- 数字序列：`123`, `456`
- 最大长度：$3$
- 两者长度相同，因此输出较大的：$456$

**Test Case 2:** `StudentID:20241001,Score:98,Phone:13812345678`
- Digit sequences: $20241001$ (8 digits), $98$ (2 digits), $13812345678$ (11 digits)
- Maximum length: $11$
- Output: $13812345678$ (the phone number!)

**测试用例 2：** `StudentID:20241001,Score:98,Phone:13812345678`
- 数字序列：$20241001$（8 位数字），$98$（2 位数字），$13812345678$（11 位数字）
- 最大长度：$11$
- 输出：$13812345678$（电话号码！）

**Test Case 3:** `Hello@World!`
- No digits found
- Output: $-1$

**测试用例 3：** `Hello@World!`
- 未找到数字
- 输出：$-1$

**Test Case 4:** `Room305-Phone:1234567-Grade:95`
- Digit sequences: $305$ (3 digits), $1234567$ (7 digits), $95$ (2 digits)
- Maximum length: $7$
- Output: $1234567$

**测试用例 4：** `Room305-Phone:1234567-Grade:95`
- 数字序列：$305$（3 位数字），$1234567$（7 位数字），$95$（2 位数字）
- 最大长度：$7$
- 输出：$1234567$

**Test Case 5:** `a1b2c3d4e5f6g7h8i9j0$
- Digit sequences: $1,2,3,4,5,6,7,8,9,0$
- Maximum length: $1$
- All have length $1$, largest is: $9$

**测试用例 5：** `a1b2c3d4e5f6g7h8i9j0$
- 数字序列：$1,2,3,4,5,6,7,8,9,0$
- 最大长度：$1$
- 所有长度均为 $1$，最大的是：$9$

## Constraints

<div align=center>

| Test Cases | $T$ | $\lvert S \rvert$ | Number Length |
| :---: | :---: | :---: | :---: |
| Sample | $5$ | Various | $\le 20$ digits |
| $1$–$3$ | $T \le 5$ | $\lvert S \rvert \le 50$ | $\le 10$ digits |
| $4$–$6$ | $T \le 10$ | $\lvert S \rvert \le 100$ | $\le 15$ digits |
| $7$–$9$ | $T \le 20$ | $\lvert S \rvert \le 500$ | $\le 18$ digits |
| $10$–$12$ | $T \le 50$ | $\lvert S \rvert \le 1000$ | $\le 30$ digits |
| $13$–$15$ | $T \le 80$ | $\lvert S \rvert \le 5000$ | $\le 50$ digits |
| $16$–$17$ | $T = 100$ | $\lvert S \rvert \le 10^{4}$ | $\le 60$ digits |
| $18$–$19$ | $T = 100$ | $\lvert S \rvert \le 5\times 10^{4}$ | |
| $20$ | $T = 100$ | $\lvert S \rvert = 10^{5}$ | $\le 100$ digits |

</div>

<div class="break-page"/>

## Standard Code

```cpp
#include <bits/stdc++.h>
using namespace std;

int main()
{
    int T;
    cin >> T;
    cin.ignore(); // Ignore newline after T

    while (T--)
    {
        string S;
        getline(cin, S);

        string current_num = "";
        int max_length = 0;
        string result = "-1";

        // Process each character
        for (int i = 0; S[i] != '\0'; i++)
        {
            char c = S[i];
            if (isdigit(c))
            {
                current_num += c;
            }
            else
            {
                if (!current_num.empty())
                {
                    int len = current_num.length();
                    if (len > max_length)
                    {
                        max_length = len;
                        result = current_num;
                    }
                    else if (len == max_length)
                    {
                        // Compare as strings to handle very long numbers
                        // For same length, lexicographic comparison works
                        if (current_num > result)
                        {
                            result = current_num;
                        }
                    }
                    current_num = "";
                }
            }
        }

        // Don't forget the last number if string ends with digits
        if (!current_num.empty())
        {
            int len = current_num.length();
            if (len > max_length)
            {
                max_length = len;
                result = current_num;
            }
            else if (len == max_length)
            {
                if (current_num > result)
                {
                    result = current_num;
                }
            }
        }

        // Output result (convert to integer if not -1 to remove leading zeros)
        if (result == "-1")
        {
            cout << "-1\n";
        }
        else
        {
            // For very long numbers, output as string
            // For normal numbers, convert to remove leading zeros
            if (result.length() <= 18)
            {
                cout << stoll(result) << "\n";
            }
            else
            {
                // Remove leading zeros for very long numbers
                size_t first_nonzero = result.find_first_not_of('0');
                if (first_nonzero == string::npos)
                {
                    cout << "0\n";
                }
                else
                {
                    cout << result.substr(first_nonzero) << "\n";
                }
            }
        }
    }

    return 0;
}

```
