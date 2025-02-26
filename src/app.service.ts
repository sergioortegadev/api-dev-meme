import { Injectable } from '@nestjs/common';
import { apiMeme } from '../apimeme.json';

@Injectable()
export class AppService {
  getHealthcheck() {
    return `<html><head><meta name="color-scheme" content="light dark">
    <style>body{font-size: 7px}</style></head><body><br/><br/><pre style="word-wrap: break-word; white-space: pre-wrap;">
██████████████████████████████████████████████████
█─▄▄▄▄█▄─▄▄─█▄─▄▄▀█▄─█─▄█▄─▄▄─█▄─▄▄▀███─▄▄─█▄─█─▄█
█▄▄▄▄─██─▄█▀██─▄─▄██▄▀▄███─▄█▀██─▄─▄███─██─██─▄▀██
▀▄▄▄▄▄▀▄▄▄▄▄▀▄▄▀▄▄▀▀▀▄▀▀▀▄▄▄▄▄▀▄▄▀▄▄▀▀▀▄▄▄▄▀▄▄▀▄▄▀</pre><br/><p style="font-family: Courier New; font-size: 1.5rem">✔ This signal only indicates that the server is up. ( ͡❛ ͜ʖ ͡❛)👌<br/>Nothing else can be guaranteed</p>
<pre>
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
8                                                   8
8  a---------------a                                8
8  |               |                                8
8  |    S.O.D.     |                                8
8  |               |                               8"
8  "---------------"                               8a
8                                                   8
8                                                   8
8                      ,aaaaa,                      8
8                    ad":::::"ba                    8
8                  ,d::;gPPRg;::b,                  8
8                  d::dP'    Yb::b                  8
8                  8::8)     (8::8                  8
8                  Y;:Yb     dP:;P  O               8
8                   Y;:"8ggg8":;P'                  8
8                    "Yaa:::aaP"                    8
8                       """""                       8
8                                                   8
8                       ,d"b,                       8
8                       d:::8                       8
8                       8:::8                       8
8                       8:::8                       8
8                       8:::8                       8
8                       8:::8                       8
8                  aaa   bad'  aaa                  8
"""""""""""""""""""'  """""""""'  """""""""""""""""""
</pre>
</body></html>`;
  }

  async getMeme() {
    function randomNumber(apiMemeLength: number) {
      return Math.floor(Math.random() * (apiMemeLength + 1));
    }
    const randomN = randomNumber(apiMeme.length);

    return {
      message: `Meme position #${randomN} │ from ${apiMeme.length} in DB`,
      data: apiMeme[randomN],
    };
  }
}
