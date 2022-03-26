# 02

## 题目

```
Intro:

    All 2 users liked the idea of the community. We should go
    forward and introduce some order. We are in Germany after all.
    Let's add a couple of admins.

    有2种用户喜欢社区的想法。我们应该去引入新的规则。毕竟我们在德国。让我们添加几个管理员。

    Initially we only had users in the in-memory database. After
    introducing Admins, we need to fix the types so that
    everything works well together.

    本来我们数据库种只有普通用户。在引入管理员之后，我们需要去维护类型，以便我们的工作顺利进行。

Exercise:

    Type "Person" is missing, please define it and use
    it in persons array and logPerson function in order to fix
    all the TS errors.

    Person类型丢失了，请定义它并在Person数组和logPerson函数中使用，以此来修复所有的TS错误。
```


## 前置知识

interface、联合类型、交叉类型
>interface：接口的作用就是为类型命名和为代码定义契约

>联合类型：某个变量可能是多个 interface 中的其中一个，用 | 分割

>交叉类型：由多个类型组成，用 & 连接

## 解题思路

### 理解

让定义一个Person类型，该类型包含了已有的用户(User)类型和新定义的管理员(Admin)类型。别在logFunction函数中使用Person类型。

### 解答

发现person变量中的项，其一含有name、age、occupation三个属性，对应User类型。其二含有name、age、role三个属性，对应Admin类型。可以使用联合类型(|)来定义新的Person类型即可达到目的。

## 代码

``` typescript
interface User {
    name: string;
    age: number;
    occupation: string;
}

interface Admin {
    name: string;
    age: number;
    role: string;
}

// export type Person = unknown; // 使用联合类型定义
export type Person = User | Admin; // 使用联合类型定义

// export const persons: User[] /* <- Person[] */ = [
export const persons: Person[] = [
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep'
    },
    {
        name: 'Jane Doe',
        age: 32,
        role: 'Administrator'
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut'
    },
    {
        name: 'Bruce Willis',
        age: 64,
        role: 'World saver'
    }
];

// export function logPerson(user: User) {
export function logPerson(user: Person) {
    console.log(` - ${user.name}, ${user.age}`);
}

persons.forEach(logPerson);
```

