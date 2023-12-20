package com.example.learn3;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.webkit.WebView;

public class MainActivity extends AppCompatActivity {
    // Khai báo webview để sử dụng
    private WebView webView;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        // chạy chương trình với activitymain
        setContentView(R.layout.activity_main);
        // tìm địa chỉ ip để chạy trong activit
        webView=(WebView) findViewById(R.id.webView);

        webView.getSettings().setJavaScriptEnabled(true);
        // chạy theo đường dẫn đc add
        webView.loadUrl("file:///android_asset/readbook/index.html");
    }
}