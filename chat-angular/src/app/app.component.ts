import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit {
  title = 'chat-angular';
  messages: string[] = [];
  message = '';

  @ViewChild('messagesList') messagesListRef!: ElementRef;   // Captura a referência da div que mostra as mensagens, oara depois fazer o scroll para baixo

  sendMessage() {
    if (this.message.trim()) {  // verificação para não serem enviadas mensagens sem texto ou só com espaços
      this.messages.push(this.message);
      this.message = '';

      setTimeout(() => this.scrollToBottom(), 0); // Espera a renderização para fazer o scroll para baixo
    }
  }

  ngAfterViewInit() {
    this.scrollToBottom(); // Rola pro fim logo no início
  }

  scrollToBottom() {
    const el = this.messagesListRef?.nativeElement; // Pega o elemento HTML referenciado como messagesList. ?. é para evitar erro caso ainda não esteja definido
    if (el) {
      el.scrollTop = el.scrollHeight; // Move o scroll para o fim da div, para sempre mostrar a mensagem recém-enviada
    }
  }

}
