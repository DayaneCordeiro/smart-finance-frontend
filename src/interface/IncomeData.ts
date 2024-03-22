export interface IncomeData {
    id?: string,
    consumerId: string,
    name: string,
    description: string,
    type: string,
    firstDueDate: string,
    totalValue: number,
    installmentAmount: number,
    installmentValue: number
}