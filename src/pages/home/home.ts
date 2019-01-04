import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TextToSpeech } from '@ionic-native/text-to-speech';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  textoASerFalado : string = 'Olá mundo!';

  constructor(private tts: TextToSpeech) {

  }

  falar(){
    this.tts.speak({
      text: this.textoASerFalado,
      locale: 'pt-BR',
      rate: 0.75})
    .then(() => alert('Falou com sucesso!'))
    .catch((reason: any) => alert(reason));
  }
}
