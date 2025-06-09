import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export interface Lembrete {
  id: number; // Adicionamos um ID para facilitar a exclusão
  date: Date;
  description: string;
}

@Component({
  selector: 'app-calendario',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css']
})
export class CalendarioComponent implements OnInit {

  currentDate: Date = new Date();
  displayMonth: number;
  displayYear: number;
  monthNames = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
                "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
  calendarDays: (number | null)[] = [];

  // Array para armazenar todos os lembretes
  lembretes: Lembrete[] = [
    // Lembretes de exemplo com ID
    { id: 1, date: new Date(2025, 5, 10), description: 'Recebimento da pensão' },
    { id: 2, date: new Date(2025, 5, 20), description: 'Natação - 18:30' }
  ];
  private nextLembreteId = 3; // Para gerar IDs únicos

  constructor() {
    this.displayMonth = this.currentDate.getMonth();
    this.displayYear = this.currentDate.getFullYear();
  }

  ngOnInit(): void {
    this.generateCalendar();
  }

  generateCalendar(): void {
    this.calendarDays = [];
    const firstDayOfMonth = new Date(this.displayYear, this.displayMonth, 1).getDay();
    const daysInMonth = new Date(this.displayYear, this.displayMonth + 1, 0).getDate();
    for (let i = 0; i < firstDayOfMonth; i++) { this.calendarDays.push(null); }
    for (let i = 1; i <= daysInMonth; i++) { this.calendarDays.push(i); }
  }

  addLembrete(day: number | null): void {
    if (!day) return;
    const description = prompt("Qual é o lembrete?");
    if (description) {
      const newLembrete: Lembrete = {
        id: this.nextLembreteId++, // Atribui e incrementa o ID
        date: new Date(this.displayYear, this.displayMonth, day),
        description: description
      };
      this.lembretes.push(newLembrete);
      this.lembretes.sort((a, b) => a.date.getTime() - b.date.getTime());
    }
  }

  /**
   * NOVA FUNÇÃO: Exclui um lembrete com base no seu ID.
   */
  deleteLembrete(lembreteId: number): void {
    // Pede confirmação antes de excluir
    if (confirm("Tem certeza que deseja excluir este lembrete?")) {
      this.lembretes = this.lembretes.filter(l => l.id !== lembreteId);
    }
  }

  getLembretesDoMes(): Lembrete[] {
    return this.lembretes.filter(lembrete =>
      lembrete.date.getMonth() === this.displayMonth &&
      lembrete.date.getFullYear() === this.displayYear
    );
  }

  // --- Funções de navegação (sem alterações) ---
  previousMonth(): void {
    this.displayMonth--;
    if (this.displayMonth < 0) { this.displayMonth = 11; this.displayYear--; }
    this.generateCalendar();
  }

  nextMonth(): void {
    this.displayMonth++;
    if (this.displayMonth > 11) { this.displayMonth = 0; this.displayYear++; }
    this.generateCalendar();
  }

  goToToday(): void {
    this.displayMonth = this.currentDate.getMonth();
    this.displayYear = this.currentDate.getFullYear();
    this.generateCalendar();
  }

  /**
   * CORREÇÃO: A função estava correta, mas garantimos que ela será usada corretamente no HTML.
   */
  isToday(day: number | null): boolean {
    if (!day) return false;
    const today = new Date();
    return day === today.getDate() &&
           this.displayMonth === today.getMonth() &&
           this.displayYear === today.getFullYear();
  }
}