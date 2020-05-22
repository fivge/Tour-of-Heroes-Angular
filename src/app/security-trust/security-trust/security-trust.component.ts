import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-security-trust',
  templateUrl: './security-trust.component.html',
  styles: []
})
export class SecurityTrustComponent {
  constructor(protected sanitizer: DomSanitizer) {
    this.html = `<form name="punchout_form" method="post" action="https://openapi.alipaydev.com/gateway.do?charset=utf-8&method=alipay.trade.page.pay&sign=GBJunKWaxEnlrbV0HRKMhhbiL3etQoP9WnDFAY5JF2m8z4d6WUle%2Bk7YBK2IHwn5bhdrIkVMIVLDBh4clDh%2FSHBpjk440i2aAs36ewNvrRUF5OnsSN4rjQyZpQqa0jMFTizRmd0q94q5cONwu02DxdC%2B1s5v8UytaWXlIhXt4Z3JtrasoQsEcoa6odRy5Xqjap3uv%2FjVJi6w%2FBloXXp4fXhOPjrg9CfyhUBL%2F3Dr4hVyrOzwweZC3WprhzQyxt3JYjx0jbrcHd5yXbe7HLgN8QQVXivzYb56NUldXHhCvVM54f3Mdiegra1M%2BHHtir2dj783LOhBPYSI5IEQ%2BIoZEg%3D%3D&return_url=http%3A%2F%2F117.73.2.112.xip.io%2Faccount%2Frecharge&notify_url=http%3A%2F%2F117.73.2.105%3A8081%2Faccount%2Frecharge%2Fnotify%2Falipay&version=1.0&app_id=2016092100560597&sign_type=RSA2&timestamp=2020-03-24+16%3A46%3A14&alipay_sdk=alipay-sdk-java-3.3.87.ALL&format=json">↵<input type="hidden" name="biz_content" value="{&quot;body&quot;:&quot;浪潮云-用户充值&quot;,&quot;out_trade_no&quot;:&quot;294874564342120448&quot;,&quot;product_code&quot;:&quot;FAST_INSTANT_TRADE_PAY&quot;,&quot;subject&quot;:&quot;浪潮云-用户充值&quot;,&quot;timeout_express&quot;:&quot;2h&quot;,&quot;total_amount&quot;:&quot;15&quot;}">↵<input type="submit" value="立即支付" style="display:none" >↵</form>↵<script>document.forms[0].submit();</script>`;
    this.subUrl = sanitizer.bypassSecurityTrustUrl(`javascript:document.forms[0].submit()`);
    this.htmlSnippet = sanitizer.bypassSecurityTrustHtml(this.html);

    this.dangerousUrl = 'javascript:alert("Hi there")';
    this.trustedUrl = sanitizer.bypassSecurityTrustUrl(this.dangerousUrl);
  }

  dangerousUrl;
  trustedUrl;

  html;
  htmlSnippet;

  subUrl;
}
