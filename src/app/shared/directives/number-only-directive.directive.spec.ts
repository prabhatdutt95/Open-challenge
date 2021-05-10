import { Component, DebugElement } from "@angular/core";
import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { DigitOnlyDirective } from "./number-only-directive.directive";

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
    inputEl.triggerEventHandler("keydown", { e: "k" });
    inputEl.triggerEventHandler("keyup", { e: "k" });
    document.execCommand("copy");
    document.execCommand("paste");
    inputEl.nativeNode.min = 4;
    inputEl.nativeNode.pattern = 4;
    fixture.detectChanges();
    inputEl.nativeNode.min = 10;
    fixture.detectChanges();
    document.execCommand("drop");

    console.log(inputEl.nativeNode.min);
    inputEl.triggerEventHandler("paste", { e: "k" });
    inputEl.triggerEventHandler("drop", { e: "k" });

    fixture.detectChanges();
  });
});
