import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styles: ['']
})
export class FeaturesComponent implements OnInit {

  features = [
    {
      title: 'Quick cash disbursement',
      subTitle: 'Get terms loans that your business needs within 72 hrs',
      img: 'assets/freelancer_feature_icon_6.png'
    },
    {
      title: 'Low-interest rate',
      subTitle: 'Get terms loans that your business needs within 72 hrs',
      img: 'assets/Low-interest-rate.png'
    },
    {
      title: 'Zero Paperwork',
      subTitle: 'Get started instantly by submitting only your basic details & bank statements',
      img: 'assets/Get-Paid-Instantly.png'
    },
    {
      title: 'Ace your business finances',
      subTitle: 'Manage banking, accounting & everything in between, on one platform',
      img: 'assets/Secure-Payments.png'
    },
    {
      title: 'Loans to fight COVID-19',
      subTitle: 'Zero EMI for first 3 months on Back-to-Business loans of upto 1 lakh',
      img: 'assets/Covid.png'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
