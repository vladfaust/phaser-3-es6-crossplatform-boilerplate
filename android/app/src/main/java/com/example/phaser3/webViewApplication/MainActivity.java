package com.example.phaser3.webViewApplication;

import android.annotation.SuppressLint;
import android.app.Activity;
import android.os.Bundle;
import android.util.Log;
import android.webkit.WebChromeClient;
import android.webkit.ConsoleMessage;
import android.view.Window;
import android.webkit.WebSettings;
import android.webkit.WebView;

public class MainActivity extends Activity {
    private static final String ApplicationName = "Application";

    @SuppressLint("SetJavaScriptEnabled")
    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        getWindow().requestFeature(Window.FEATURE_NO_TITLE);
        WebView mWebView = new WebView(this);

        WebSettings webSettings = mWebView.getSettings();
        webSettings.setJavaScriptEnabled(true);
        webSettings.setAllowFileAccessFromFileURLs(true);

        mWebView.setWebChromeClient(new WebChromeClient() {
            public boolean onConsoleMessage(ConsoleMessage cm) {
                String content = cm.message();
                switch (cm.messageLevel()) {
                    case DEBUG:
                        Log.d(ApplicationName, content);
                        break;
                    case ERROR:
                        Log.e(ApplicationName, content);
                        break;
                    case LOG:
                        Log.i(ApplicationName, content);
                        break;
                    case TIP:
                        Log.i(ApplicationName, content);
                        break;
                    case WARNING:
                        Log.w(ApplicationName, content);
                        break;
                }
                return true;
            }
        });
        mWebView.loadUrl("file:///android_asset/index.html");

        this.setContentView(mWebView);
    }
}