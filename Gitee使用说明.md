# Gitee 使用说明

## 创建仓库步骤

1. 打开 https://gitee.com/projects/new
2. 填写信息：
   - **仓库名称**：`WheelPulseCalc`（或你喜欢的名字）
   - **仓库介绍**：`DP3031速度计算器 - 支持Android和iOS`
   - **是否开源**：选择公开或私有
   - **初始化仓库**：勾选 `Readme文件`
3. 点击 **创建**

## 推送代码到 Gitee

创建仓库后，在本地运行：

```bash
cd D:\WorkBuddy\WheelPulseCalc_MiniApp
git remote add gitee https://gitee.com/你的用户名/WheelPulseCalc.git
git push -u gitee main
```

## 配置 CI/CD（流水线）

Gitee 的 CI/CD 需要单独配置，有两种方式：

### 方式一：Gitee Go（推荐）

1. 进入仓库 → ** DevOps ** → **流水线**
2. 创建流水线，选择 **自定义**
3. 粘贴 `.gitee-ci.yml` 文件内容
4. 保存并运行

### 方式二：GitHub Actions 镜像

由于 Gitee 的 macOS 构建资源有限，建议：

1. 代码推送到 Gitee（国内访问）
2. 同时镜像到 GitHub（用于 iOS 构建）
3. 在 GitHub Actions 构建 iOS，下载产物

## 目录结构说明

```
WheelPulseCalc_MiniApp/
├── apk_build/          # Android 专用（保持不变）
├── ios_build/          # iOS 专用（CI自动生成）
├── pages/              # 微信小程序
├── .gitee-ci.yml       # Gitee 流水线配置
├── .github/workflows/  # GitHub Actions 配置
└── Gitee使用说明.md    # 本文件
```

## 注意事项

1. **Android 开发**：只修改 `apk_build/` 目录
2. **iOS 开发**：修改 `ios_build/` 目录（CI自动生成）
3. **代码同步**：如需同步，手动复制 `apk_build/www/` 到 `ios_build/www/`

## 构建产物下载

- **Android APK**：本地运行 `build_apk.bat`
- **iOS 安装包**：在 Gitee/GitHub 流水线页面下载