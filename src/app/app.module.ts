import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideHttpClient } from '@angular/common/http';
import { ChildComponent } from './components/child/child.component';

@NgModule({
  // Массив компонентов, директив и пайпов, которые принадлежат этому модулю.
  declarations: [AppComponent],
  //  Массив модулей, которые этот модуль импортирует.
  imports: [BrowserModule, AppRoutingModule, ChildComponent],
  // Массив провайдеров внедрения зависимостей, которые доступны для всего модуля.
  providers: [provideHttpClient()],
  // Массив компонентов, которые Angular должен запустить при загрузке этого модуля
  bootstrap: [AppComponent],
  // Массив компонентов, директив и пайпов, которые должны быть доступны для других модулей, которые импортируют этот модуль.
  exports: [],
})
export class AppModule {}
