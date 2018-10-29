import { Directive, HostListener, HostBinding } from "@angular/core";

@Directive({
  selector: '[appDropdown]'
})

export class DropdownDirective {
  @HostBinding('class.open') isActive: boolean = false;

  @HostListener('click') toggleMenu() {
    this.isActive = !this.isActive;
  }
}