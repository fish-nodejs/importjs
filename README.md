# 如何import js模块？
https://stackoverflow.com/a/39401237/8252883
为什么不直接原样翻译？还要额外配置插件？不懂，傻逼设定。
```
npm install @types/node --save-dev
```
``` json
{
    "compilerOptions": {
        "types": ["node"]
    }
}
```

"target": "es2017" 才能保留async await 关键字
node环境无所谓。
