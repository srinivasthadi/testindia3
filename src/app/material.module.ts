import { NgModule } from '@angular/core';

import {MatButtonModule, 
        MatIconModule,
        MatFormFieldModule,
        MatInputModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatCheckboxModule,
        MatSidenavModule,
        MatToolbarModule,
        MatListModule,
        MatTabsModule,
        MatCardModule,
        MatSelectModule,
        MatTableModule
    } from '@angular/material';

@NgModule({
    imports: [MatButtonModule, MatIconModule,
         MatInputModule, MatFormFieldModule,
         MatDatepickerModule, MatNativeDateModule,
         MatCheckboxModule, MatSidenavModule,
         MatToolbarModule, MatListModule,
         MatTabsModule, MatCardModule,
         MatSelectModule, MatTableModule

        ],
    exports: [MatButtonModule, MatIconModule, 
        MatInputModule, MatFormFieldModule,
        MatDatepickerModule, MatNativeDateModule,
        MatCheckboxModule, MatSidenavModule,
        MatToolbarModule, MatListModule,
        MatTabsModule, MatCardModule,
        MatSelectModule, MatTableModule
    ]
})
export class MaterialModule{}

