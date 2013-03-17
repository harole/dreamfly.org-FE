# JavaScript编码规范

### 命名规范

* 构造函数：首字母大写的驼峰式（没有下划线或连字符）

* 普通变量、普通函数、对象成员：首字母小写的驼峰式

* 私有变量、私有函数、对象内部使用的成员：以下划线开头的首字母小写的驼峰式。如：`_privateMethod`。

* 常量名全部大写，单词间用下划线分隔。


### 注释格式

* 建议把注释写在所注释的代码的上一行，必要的时候可以写在同一行，不建议写在下一行，除非注明是对以上代码的注释。

* 接口的参数要说明清楚。

* [参考Google JavaScript编码规范的注释规范](http://wyz.67ge.com/google-js/javascriptguide.xml?showone=%E6%B3%A8%E9%87%8A#%E6%B3%A8%E9%87%8A)


### 代码格式

* **使用2个空格做为缩进。**[参见](http://www.zhihu.com/question/19960028)，最主要的好处是：

  * 避免tab在不同环境下的长度不同。使缩进在任何环境下具有统一的长度。

  * 靠谱编辑器都能一次删除多个空格，避免多次按退格键的麻烦。（在Sublime Text 2下是ctrl + 退格键）

* 字符串使用**单引号**。

* 语句必须都有分号结尾，除了`for, function, if, switch, try, while`。

* 链式调用应考虑断行。如：

  ```JavaScript
  $("#id").find(".class")
    .addClass("class2");
  ```

* 多个成员的对象或数组

* 所有循环体和判断体都要用"{}"括起来，无论里面有多少条语句。

* "{}"的"{"和"}"不要跟"{}"里的语句或表达式在同一行。"[]"同理，但表达式较短时可考虑在同一行。如：

  ```JavaScript
  while (--i) {
    console.log(arr[i]);
  }
  var arr = [
  	{
	  	key: "foo"
	  },
	  {
		  key: "bar"
		}
  ];
  var arr2 = ["foo", "bar"];
  ```

* "}"后的 `while, else` 等关键词应和"}"在同一行，但需要前后有空格。如：

  ```JavaScript
  if (statements) {
  	// do something
  } else {
    // do something else
	}
  ```

* 用来包含表达式或函数形参的"()"前后要有空格，除非直接后接行末的分号或用于函数调用。如：

  ```JavaScript
  function func (arg) {

  }

  (function ($) {
  	// do something
	}) (jQuery);
  ```

* "="前后要有空格

* 数组成员间的","后面要有空格。如：`[1, 2]`

* 避免额外的逗号。如：`[1, 2, 3, ]`

* JavaScript代码应尽量符合JSHint检验（后期再制作专门的Dreamfly-JSHint检验工具）


### 代码逻辑

* 使用不带类型转换的条件判断符：用`===`代替`==`，用`!==`代替`!=`。

* for-in循环体中要用hasOwnProperty方法检查成员是否为自身成员。避免来自原型链上的污染。如：

  ```JavaScript
  for (key in obj) {
  	if (obj.hasOwnProperty(key)) {
  		// obj[key]是自身成员，不在原型链上
  	}
  }
  ```

* 把变量或函数的声明放在所在作用域的最上面，不要使用未声明的变量。

* 不要使用`with`。

* 不要修改内置对象的原型。

* 对于数值、字符串、布尔值、对象、数组，建议使用字面量构造，不建议使用`new Number, new String, new Boolean, new Object, new Array`。
