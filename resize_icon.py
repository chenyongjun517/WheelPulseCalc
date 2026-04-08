#!/usr/bin/env python3
"""
将源图标缩放为各密度规格并写入Android mipmap目录
"""
from PIL import Image
import os

# 源图标路径
SOURCE_ICON = r"C:\Users\kfchenyongjun\Desktop\screenshot_2026-04-01_08-12-18.png"

# Android mipmap 目录和对应尺寸
MIPMAP_CONFIG = {
    r"D:\WorkBuddy\WheelPulseCalc_MiniApp\apk_build\android\app\src\main\res\mipmap-mdpi": 48,
    r"D:\WorkBuddy\WheelPulseCalc_MiniApp\apk_build\android\app\src\main\res\mipmap-hdpi": 72,
    r"D:\WorkBuddy\WheelPulseCalc_MiniApp\apk_build\android\app\src\main\res\mipmap-xhdpi": 96,
    r"D:\WorkBuddy\WheelPulseCalc_MiniApp\apk_build\android\app\src\main\res\mipmap-xxhdpi": 144,
    r"D:\WorkBuddy\WheelPulseCalc_MiniApp\apk_build\android\app\src\main\res\mipmap-xxxhdpi": 192,
}

def main():
    # 打开源图标
    img = Image.open(SOURCE_ICON)
    print(f"源图标尺寸: {img.size}, 模式: {img.mode}")
    
    # 确保是RGBA模式
    if img.mode != 'RGBA':
        img = img.convert('RGBA')
    
    for mipmap_dir, size in MIPMAP_CONFIG.items():
        # 确保目录存在
        os.makedirs(mipmap_dir, exist_ok=True)
        
        # 缩放图标
        resized = img.resize((size, size), Image.LANCZOS)
        
        # 写入 ic_launcher.png 和 ic_launcher_round.png
        ic_launcher = os.path.join(mipmap_dir, "ic_launcher.png")
        ic_launcher_round = os.path.join(mipmap_dir, "ic_launcher_round.png")
        
        resized.save(ic_launcher, "PNG")
        resized.save(ic_launcher_round, "PNG")
        print(f"[OK] 已生成 {size}x{size} 图标: {mipmap_dir}")
    
    print("\n所有图标已生成完成!")

if __name__ == "__main__":
    main()