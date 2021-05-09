import { Component, DebugElement } from "@angular/core";
import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { DigitOnlyDirective } from "./number-only-directive";

@Component({
  template: `<input type="text" digitOnly />`,
})
class TestDigitOnlyDirective {}

describe("Directive: DigitOnlyDirective", () => {
  let component: TestDigitOnlyDirective;
  let fixture: ComponentFixture<TestDigitOnlyDirective>;
  let inputEl: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestDigitOnlyDirective, DigitOnlyDirective],
    });
    fixture = TestBed.createComponent(TestDigitOnlyDirective);
    component = fixture.componentInstance;
    inputEl = fixture.debugElement.query(By.css("input"));
  });

  it("hovering over input", () => {
    inputEl.triggerEventHandler("keydown", {e: 'k'});
    fixture.detectChanges();
    // expect(inputEl.nativeElement.style.backgroundColor).toBe("blue");

    inputEl.triggerEventHandler("keyup", {ctrlKey: true});
    fixture.detectChanges();
    // console.log(inputEl.nativeElement.style.backgroundColor);
    // expect(inputEl.nativeElement.style.backgroundColor).toBe("inherit");
  });
});
