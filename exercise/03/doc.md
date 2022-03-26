# 03

## 题目

```
Intro:

    Since we already have some of the additional
    information about our users, it's a good idea
    to output it in a nice way.

    因为我们已经有了一些关于用户的额外信息，所以有个好点子，
    以一种更良好的方式输出。    

Exercise:

    Fix type errors in logPerson function.
    修复logPerson函数中的类型错误。

    logPerson function should accept both User and Admin
    and should output relevant information according to
    the input: occupation for User and role for Admin.

    logPerson函数应接受用户和管理员类型，并应根据输入输出相关信息:
    用户的职业和管理员的角色。
      
 
```

## 前置知识

in 操作符充当类型的窄化表达式

tips: 当然这是js的解决方案，本题也可以通过断言解决，断言相关内容请期待下一题

## 解题思路

### 理解

logPerson函数应该同时接受User和Admin  
并应按要求输出相关信息,就是能访问到User或Admin的私有属性  

### 解答

User 中有三个属性 name ，age 和 occupation，
Admin 中有三个属性 name ，age 和 role。
在logPerson中接收的参数person 为User 或 Admin类型，
使用 in 操作符 判断该属性是否存在在该对象中
## 代码

```
export function logPerson(person: Person) {
    let additionalInformation: string;
    if ( person.role ) {
        additionalInformation = person.role;
    } else {
        additionalInformation = person.occupation;
    }
    console.log(` - ${person.name}, ${person.age}, ${additionalInformation}`);
}
```
