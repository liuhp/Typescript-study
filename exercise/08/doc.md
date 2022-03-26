# 01

## 题目

```
/*

Intro:

    Project grew and we ended up in a situation with
    some users starting to have more influence.
    Therefore, we decided to create a new person type
    called PowerUser which is supposed to combine
    everything User and Admin have.

Exercise:

    Define type PowerUser which should have all fields
    from both User and Admin (except for type),
    and also have type 'powerUser' without duplicating
    all the fields in the code.

*/

interface User {
    type: 'user';
    name: string;
    age: number;
    occupation: string;
}

interface Admin {
    type: 'admin';
    name: string;
    age: number;
    role: string;
}

type PowerUser = unknown;

export type Person = User | Admin | PowerUser;

export const persons: Person[] = [
    { type: 'user', name: 'Max Mustermann', age: 25, occupation: 'Chimney sweep' },
    { type: 'admin', name: 'Jane Doe', age: 32, role: 'Administrator' },
    { type: 'user', name: 'Kate Müller', age: 23, occupation: 'Astronaut' },
    { type: 'admin', name: 'Bruce Willis', age: 64, role: 'World saver' },
    {
        type: 'powerUser',
        name: 'Nikki Stone',
        age: 45,
        role: 'Moderator',
        occupation: 'Cat groomer'
    }
];

function isAdmin(person: Person): person is Admin {
    return person.type === 'admin';
}

function isUser(person: Person): person is User {
    return person.type === 'user';
}

function isPowerUser(person: Person): person is PowerUser {
    return person.type === 'powerUser';
}

export function logPerson(person: Person) {
    let additionalInformation: string = '';
    if (isAdmin(person)) {
        additionalInformation = person.role;
    }
    if (isUser(person)) {
        additionalInformation = person.occupation;
    }
    if (isPowerUser(person)) {
        additionalInformation = `${person.role}, ${person.occupation}`;
    }
    console.log(`${person.name}, ${person.age}, ${additionalInformation}`);
}

console.log('Admins:');
persons.filter(isAdmin).forEach(logPerson);

console.log();

console.log('Users:');
persons.filter(isUser).forEach(logPerson);

console.log();

console.log('Power users:');
persons.filter(isPowerUser).forEach(logPerson);

// In case if you are stuck:
// https://www.typescriptlang.org/docs/handbook/utility-types.html

```


## 前置知识

- 集合操作（交叉类型）
- & 操作符
- 泛型
- Omit 泛型


## 解题思路

### 理解

定义一个类型 PowerUser， 里面包含 User 和 Admin 的所有属性， 并且增加一个固定字段 type: 'powerUser'。

### 解答

- 合并 User 和 Admin 的属性。使用 & 操作符可以实现。
- 增加属性 type: powerUser。首先去掉上一步合并的 type 属性， 然后继续和 { type: "powerUser" } 交叉即可。
- 增加 { type: "powerUser" } 之前使用内置泛型 Omit 将原本的 type 删掉。


## 代码

``` typescript
# line 34
type PowerUser = Omit<User & Admin, 'type'> & {type: 'powerUser'};
```

