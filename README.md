
# Loan Calculator UI

## Project Overview
This project is a user-friendly web interface for a loan calculator application. Users can interact with adjustable sliders to customize their loan amounts and periods, view their estimated monthly installments, and get information about maximum funding.

## Features
- **Maximum Funding Display:** Shows the maximum loan amount for a specific vehicle.
- **Loan Amount Selection:** Slider to adjust the desired loan amount.
- **Loan Period Selection:** Slider to select the duration of the loan in months.
- **Monthly Payment Estimation:** Displays the estimated monthly installment amount.

## Tech Stack
- **Frontend:** ReactJS
- **UI Components:** React Bootstrap
- **Styling:** Inline styles

## Project Structure
```


## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```bash
   cd loan-calculator-ui
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open the app in your browser:
   ```
http://localhost:5173
   ```

## Usage
1. Adjust the **Loan Amount** and **Loan Period** sliders.
2. View the updated estimated monthly installment in real-time.
3. See maximum funding and relevant vehicle details displayed.

## Component Descriptions

### MaximumFundingCard
Displays information about the maximum loan amount for a specific vehicle.

### MonthlyPayment
Shows the calculated monthly installment based on user-selected loan parameters.

### RangeSlider
A customizable slider component used to adjust loan amounts and periods.

## Styling
The components are styled using:
- Dark-themed card backgrounds (`#2A2E37`)
- Text and labels in contrasting colors (`#94A3B8`, `white`)
- Flexbox layouts for a clean, responsive UI



