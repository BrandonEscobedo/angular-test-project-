import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { TabMenuModule } from 'primeng/tabmenu';
import { ButtonModule } from 'primeng/button';
import { CalendarOptions } from '@fullcalendar/core'; // useful for typechecking
import dayGridPlugin from '@fullcalendar/daygrid';
import { FullCalendarModule } from '@fullcalendar/angular';
import esLocale from '@fullcalendar/core/locales/es';
import interactionPlugin from '@fullcalendar/interaction';
@Component({
  selector: 'app-vista-proyecto',
  standalone: true,
  imports: [TabMenuModule, ButtonModule,FullCalendarModule,],
  templateUrl: './vista-proyecto.component.html',
  styleUrl: './vista-proyecto.component.css'
})
export class VistaProyectoComponent implements OnInit {

  calendarOptions: CalendarOptions = {
    locale: esLocale,
    headerToolbar: {
      left:'prev,next',
      center:'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth'
    
    },
    initialView: 'dayGridMonth',

    editable: false,
    plugins: [dayGridPlugin,interactionPlugin]
  };
  public event:any=[];
    ngOnInit() {
      this.event = [{
        title:"Evento 1",
        start:new Date(),
        description:"Evento 1 descripcion",

      },
      {
      title:"Evento 2",
      start:new Date().getTime() + 86400000,
      description:"Evento 2 descripcion",
      
    },
    {
      title:"Evento 3",
      start:new Date().getTime() + (86400000*2),
      end:new Date(new Date().getTime()+(86400000*3)), 
      description:"Evento 3 descripcion",
      
    }
    ]
    this.items = [
      { label: 'Datos del proyecto', icon: 'pi pi-home' },
      { label: 'Estatus', icon: 'pi pi-chart-line' },
      { label: 'Resmen', icon: 'pi pi-list' },
    ];

    this.activeItem = this.items[0];
  }

  onActiveItemChange(event: MenuItem) {
    this.activeItem = event;
  }
  items: MenuItem[] | undefined;

  activeItem: MenuItem | undefined;

 
}
