# 服务端API

本项目服务端接口主要按照REST风格设计，传输格式为JSON。

## REST入门

HTTP请求的路径为名词，表示要操作的对象或资源。

HTTP请求的类型表示对此对象进行的操作类型，对应关系如下：

- GET: read
- POST: create
- PUT: update
- DELETE: delete

推荐扩展阅读：

- [REST是什么](https://www.evernote.com/shard/s309/sh/e0232a85-11ab-4d73-b435-c996c6b359ba/02127eaf8c6e24f013b0c2133c3edd98)
- [最佳实践：更好的设计你的 REST API](https://www.evernote.com/shard/s309/sh/56f02d93-2eec-4807-b7e1-c49d9f02af5f/f5500d2f6c8952c486a1ec0d202b36a4)




## 服务端API简单描述

传输数据的完整结构和描述见本文档稍后部分

### /api/post

- **POST**: 创建一篇文章
  - 发送数据

    ```JavaScript
    {
      title: String
      time: String
      author: Object member {
        name: String
      }
      tag: [String]
      content: String
    }
    ```
  - 操作成功则返回

    ```JavaScript
    String // 文章id
    ```


### /api/post/:postId

postId是文章的唯一标识id

- **GET**: 返回这篇文章
  如果没有提供任何参数，返回如下完整数据：

  ```JavaScript
  {
    id: String
    title: String
    time: String
    author: Object member
    modifier: [Object member]
    tag: [String]
    content: String
    comment: [Object comment]
  }
  ```
  请求提供的参数如下：
  - modifier: 布尔值，表示返回中是否包含修改者数组，默认为 `true`
  - authorDescription: 布尔值，表示返回中是否包含作者描述，默认为 `true`
  - authorAvatar: 布尔值，表示返回中是否包含作者头像，默认为 `true`
  - authorAvatarSize: 正整数，表示作者头像的尺寸，可选的值有 `25, 65, 200`，默认为 `65`
  - authorProfile: 布尔值，表示返回中是否包含作者个人主页url数组，默认为 `true`
  - commenterAvatar: 布尔值，表示返回中是否包含评论者的头像，默认为 `true`
  - commenterAvatarSize: 正整数，表示评论者头像的尺寸，可选的值有 `25, 64`，默认为 `64`
    
- **PUT**: 更新这篇文章
  - 发送数据

    ```JavaScript
    {
      id: String
      title: String
      modifier: Object member
      tag: [String]
      content: String
    }
    ```
    除了id，缺省的字段表示没有对其修改。包含的字段具有新的完整值。
  - 操作成功则返回

    ```JavaScript
    String // id
    ```
- **DELETE**: 删除这篇文章
  操作成功则返回

    ```JavaScript
    String // 文章id
    ```

### /api/post/:postId/comment

- **POST**: 为这篇文章创建一条评论
  - 发送数据

    ```JavaScript
    {
      commenter: {
        name: String
        avatar: String // 用户上传的头像。数据类型待定。
        url: String
        email: String
      }
      time: String
      content: String
    }
    ```
  - 操作成功则返回

    ```JavaScript
    {
      postId: String // 文章id
      commentId: String // 评论id
    }
    ```

### /api/post/:postId/comment/:commentId

- **DELETE**: 删除这篇文章的这条评论
  - 发送的数据 **（是否需要？待定）**

    ```JavaScript
    {
      email: String // 提供邮箱以辅助验证是否评论者本人
    }
    ```
  - 操作成功则返回

    ```JavaScript
    {
      postId: String // 文章id
      commentId: String // 评论id
    }
    ```

### /api/posts

- **GET**: 返回由文章组成的数组。可提供的参数如下：
  - **page**: 正整数，表示第几页，从1开始，默认为1
  - **step**: 正整数，表示每页多少篇文章，默认为所有文章的数量
  - **sortField**: 字符串，目前默认值为 `time`
  - **sortOrder**: 字符串，可选的值有 `ascend, descend` ，默认为 `descend`





## 传输数据的完整结构和描述

这只是前后端传输的数据结构，不代表数据库的数据结构。

### 成员member

```JavaScript
{
  id: // 成员唯一标识
  name: String // 成员名
  description: String // 成员描述
  avatar: {
    size25: String // 长宽均为25px的头像的url
    size65: String // 长宽均为65px的头像的url
    size200: String // 长宽均为200px的头像的url
  }
  profile: [String] // 个人主页url组成的数组
}
```

### 文章post

```JavaScript
{
  id: String // 文章的唯一标识
  title: String // 文章标题
  time: String // 表示文章发表时间的时间戳
  author: Object member // 成员类型，文章的创建者兼发布者（创建者才可以成为发布者）
  modifier: [Object member] // 成员组成的数组，所有修改文章的成员
  tag: [String] // 标签组成的数组
  content: String // 文章内容
  comment: [Object comment] // 本文章所有评论组成的数组
}
```

### 评论comment

```JavaScript
{
  id: String // 评论的唯一标识
  commenter: {
    name: String // 评论者
    avatar: {
      size25: String // 长宽均为25px的头像的url
      size65: String // 长宽均为65px的头像的url
    },
    url: String // 评论者的个人主页
    email: String // 评论者的邮箱，不要包含在返回的数据中
  }
  time: String // 评论的时间戳
  content: String // 评论的内容
}
```
