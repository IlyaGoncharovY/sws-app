/**
 * common type LinesList
 * @type LinesListResponseChild[]
 */
export type LinesListResponse = LinesListResponseChild[];
/**
 * ListResType
 * @type child
 * @type equipmentCosts
 * @type estimatedProfit
 * @type id
 * @type machineOperatorSalary
 * @type mainCosts
 * @type materials
 * @type mimExploitation
 * @type overheads
 * @type rowName
 * @type salary
 * @type supportCosts
 * @type total
 */
export type LinesListResponseChild = {
    child: null | LinesListResponseChild[];
    equipmentCosts: number;
    estimatedProfit: number;
    id: number;
    machineOperatorSalary: number;
    mainCosts: number;
    materials: number;
    mimExploitation: number;
    overheads: number;
    rowName: string;
    salary: number;
    supportCosts: number;
    total: number;
}

/**
 * ReqAddNewLine
 * @type equipmentCosts
 * @type estimatedProfit
 * @type machineOperatorSalary
 * @type mainCosts
 * @type materials
 * @type mimExploitation
 * @type overheads
 * @type parentId
 * @type rowName
 * @type salary
 * @type supportCosts
 */
export type RequestAddNewLineType = {
	equipmentCosts: number;
	estimatedProfit: number;
	machineOperatorSalary: number;
	mainCosts: number;
	materials: number;
	mimExploitation: number;
	overheads: number;
	parentId: number | null;
	rowName: string;
	salary: number;
	supportCosts: number;
}

/**
 * ResponseAddNewLineType
 * @type changed
 * @type current
 */
export type ResponseAddNewLineType = {
	changed: ResponseAddNewLineTypeChanged[];
	current: ResponseAddNewLineTypeCurrent;
}

/**
 * ResponseAddNewLineTypeChanged
 * @type equipmentCosts
 * @type estimatedProfit
 * @type id
 * @type machineOperatorSalary
 * @type mainCosts
 * @type materials
 * @type mimExploitation
 * @type overheads
 * @type rowName
 * @type salary
 * @type supportCosts
 * @type total
 */
export type ResponseAddNewLineTypeChanged = {
	equipmentCosts: number;
	estimatedProfit: number;
	id: number;
	machineOperatorSalary: number;
	mainCosts: number;
	materials: number;
	mimExploitation: number;
	overheads: number;
	rowName: string;
	salary: number;
	supportCosts: number;
	total: number;
}

/**
 * ResponseAddNewLineTypeCurrent
 * @type equipmentCosts
 * @type estimatedProfit
 * @type id
 * @type machineOperatorSalary
 * @type mainCosts
 * @type materials
 * @type mimExploitation
 * @type overheads
 * @type rowName
 * @type salary
 * @type supportCosts
 * @type total
 */
export type ResponseAddNewLineTypeCurrent = {
	equipmentCosts: number;
	estimatedProfit: number;
	id: number;
	machineOperatorSalary: number;
	mainCosts: number;
	materials: number;
	mimExploitation: number;
	overheads: number;
	rowName: string;
	salary: number;
	supportCosts: number;
	total: number;
}

/**
 * ResponseDeleteLine
 * @type current
 * @type changed
 */
export type ResponseDeleteLine = {
	current: null;
	changed: any[];
}
