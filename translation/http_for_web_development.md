【译】HTTP-每个web开发者都应该知道的协议
-----------

原文来自[HTTP: The Protocol Every Web Developer Must Know - Part 1][1]

HTTP，Hypertext Transfer Protocol，就是超文本传输协议.它是没有状态，为了分布式系统交互的应用层的协议，它是现在web的基础。作为一个web开发者，我们必须对这个协议有很深的理解。

让我们从一个web开发者的角度来回顾这个强大的协议。我们会把这个主题分成两部分。在第一部分，我们会涉及一些基础和略述各种请求和响应的头部。在另一部分，我们会回顾http的一些特别部分-缓存，连接处理和验证。

尽管我会提及一些http头的细节，但是最好还是查看RFC([RFC 2616][2])去了解更详细的内容。我会在这篇文章中指出一些RFC中特别的部分。

### HTTP基础


[1]:http://code.tutsplus.com/tutorials/http-the-protocol-every-web-developer-must-know-part-1--net-31177
[2]:http://www.w3.org/Protocols/rfc2616/rfc2616