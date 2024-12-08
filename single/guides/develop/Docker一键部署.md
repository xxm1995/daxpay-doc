# Docker一键部署
::: info
Docker方式用于快速体验本项目, 默认使用MySQL数据库. 各方面配置都未经过调优处理, 如果用于生产需要自行根据源码进行构建和配置.
:::

## Docker-Compose部署
> 需要自己准备`MySQL`数据库和`Redis`，将数据脚本进行导入，注意数据库开启忽略大小写。然后在`docker-compose.yml`编排文件中`environment`进行填写。
### 部署前准备
> 需要在机器上提前安装好`docker`和`docker-compose`, 然后准备好MySQL和Redis实例. 
> 然后复制下面的内容粘贴到文本编辑器中, 保存为`docker-compose.yml`文件, 将文件上传到机器中.

> 项目默认端口为9999, 可以通过`docker-compose.yml`文件中的`ports`进行端口映射配置相进行修改.

> 当网络模式为bridge时需要配置端口映射, 此时数据库和redis配置的地址将不可以为`localhost`或`127.0.0.1`

**编排文件**
```yaml
version: '3'
services:
  daxpay-single:
    image: registry.cn-beijing.aliyuncs.com/daxpay/daxpay-single:3.0.0.beta2
    restart: always
    # window上不支持host网络模式, 需要更改为 bridge 网络模式, 然后走端口映射
    network_mode: host
    # 如果不可以使用host网络模式时使用这个, 此时数据库相关的连接地址将不可以使用 127.0.0.1
#    ports:
      # 端口映射 外部端口:容器端口
#      - "9999:9999"
    # 读取外部化配置文件(根据实际服务器环境做修改), 宿主机目录:容器目录
    volumes:
      # 日志
      - ./data/logs/:/logs
      # 上传文件目录
      - ./data/files/:/data/files
    environment:
      # mysql数据库连接地址
      - MYSQL_URL=jdbc:mysql://127.0.0.1:3306/dax-pay-single?serverTimezone=GMT%2B8&characterEncoding=utf8&allowMultiQueries=true&useSSL=false&nullCatalogMeansCurrent=true&allowPublicKeyRetrieval=true
      # mysql数据库账号
      - MYSQL_USERNAME=root
      # mysql数据库密码
      - MYSQL_PASSWORD=root
      # Redis 连接地址
      - REDIS_HOST=127.0.0.1
      # Redis 端口
      - REDIS_PORT=6379
      # Redis 库号
      - REDIS_DATABASE=5
      # Redis 密码, 如果不设置密码则留空
      - REDIS_PASSWORD=daxpay
      # 是否关闭swagger接口
      - KNIFE4J_PRODUCTION=false
      # 是否启用超级管理员登录, 正式环境不要开启
      - DAXPAY_ENABLE_ADMIN=true
      # 用户管理列表中是否显示超级管理员
      - DAXPAY_ADMIN-IN-LIST=true

```
### 部署

> 在`docker-compose.yml`文件所在的目录下执行 `docker compose up -d`或者 `docker-compose up -d`命令启动容器. 

> 可以同时使用`docker compose logs -f` 或 `docker-compose logs -f` 命令来查看容器日志. 出现如下内容说明项目启动成功.


```shell
2024-12-06 14:13:403| INFO [] main - org.dromara.daxpay.DaxpayServer|
daxpay-sigle-1  | ----------------------------------------------------------
daxpay-sigle-1  |     应用 'dax-pay-server' 运行成功!
daxpay-sigle-1  |     Swagger文档:              http://172.23.0.2:9999/doc.html
daxpay-sigle-1  |     Swagger文档:              http://127.0.0.1:9999/doc.html
daxpay-sigle-1  | ----------------------------------------------------------
```

> 容器部署后, 系统运行中所上传文件默认存放在`docker-compose.yml`文件所在目录的`/data/files/`下.

> 容器部署后, 系统运行中所产生的日志文件默认存放在`docker-compose.yml`文件所在目录`/data/log/`下.

### 部署后配置
> 推荐使用Nginx对外网进行映射, 这样可以避免端口暴露的问题. 也方便接收支付回调消息通知.
#### 访问地址
部署后可以通过下面等个地址访问项目中的内容:
- web管理端: http://ip:9999/web/
- H5移动端: http://ip:9999/h5/
- 接口文档: http://ip:9999/doc.html
- 文件访问目录: http://ip:9999/storage/

#### 平台配置
所在位置 `支付配置 -> 基础配置 -> 平台配置` 需要根据当前机器的访问地址和暴露的端口号进行配置, 如果进行映射转发, 需要根据映射情况进行配置: 
- 网关服务地址: 用于接收通知回调消息的地址, 需要修改为为`http://ip:端口号` 或映射转发后的地址
- 网关H5端地址: 用于跳转H5支付页面的地址, 主要为各类收单页, 需要修改为为`http://ip:端口号/h5` 或映射转发后的地址
- 网关PC端地址: 后台管理系统的访问地址, 也包括PC收银台地址, 需要修改为为`http://ip:端口号/web` 或映射转发后的地址

#### 存储平台配置
存储平台配置, 默认使用本地文件存储, 需要根据当前机器的访问地址和暴露的端口号进行配置, 如果进行映射转发, 需要根据映射情况进行配置. 
需要将 `本地存储` 方式设置为默认平台, 同时修改平台地址为 `http://ip:端口号/storage`

## 使用自带数据库和缓存
> TODO 待补充


