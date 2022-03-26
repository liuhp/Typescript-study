# 01

## 题目

```
Intro:

    We are starting a small community of users. For performance
    reasons we have decided to store all users right in the code.
    This way we can provide our developers with more
    user-interaction opportunities. With user-related data, at least.
    All the GDPR-related issues we will solved some other day.
    This would be the base for our future experiments during
    these exercises.

Exercise:

    Given the data, define the interface "User" and use it accordingly.
```


## 前置知识

interface 或 type 声明自定义类型

## 解题思路

### 理解

让你定义一个类型 User， 使得代码可以正常运行。

### 解答

User 中有三个属性 name ，age 和 occupation，类型分别为 string， number 和 string。因此直接使用 type 或者 interface 定义自定义类型即可。

## 代码

``` typescript
export type User = {
  name: string;
  age: number;
  occupation: string;
};

export interface User = {
  name: string;
  age: number;
  occupation: string;
};
```

