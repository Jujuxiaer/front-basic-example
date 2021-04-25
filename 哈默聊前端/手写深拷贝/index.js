const oldObj = {
    name: "Jujuxiaer",
    age: 20,
    colors: ['orange', 'red', 'blue'],
    friends: {
        name: "小可"
    }
}

const newObj1 = oldObj;
newObj1.name = "小华";
console.log(oldObj);
console.log(newObj1);


function deepClone(obj = {}) {
    let ret;
    if (typeof obj !== 'object' || obj == null) {
        return obj;
    }
    if (obj instanceof Array) {
        ret = [];
    } else {
        ret = {};
    }
    for (let objKey in obj) {
        // 只拷贝对象自身的属性
        if (obj.hasOwnProperty(objKey)) {
            // 重点：递归的深拷贝，目的是为了对象的对象的值也是深拷贝
            ret[objKey] = deepClone(obj[objKey]);
        }
    }
    return ret;
}

const oldObj2 = {
    name: "Jujuxiaer",
    age: 20,
    colors: ['orange', 'red', 'blue'],
    friends: {
        name: "小可"
    }
}

const newObj2 = deepClone(oldObj2);
newObj2.name = "小华";
newObj2.colors[0] = 'black';
newObj2.age = 30;
newObj2.friends.name = "小明";
console.log('=========');
console.log(oldObj2);
console.log(newObj2);