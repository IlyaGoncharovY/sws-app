import React, {useCallback, useState} from 'react';

import {SWSApi} from '../../../api/SWSApi';
import {LinesListResponseChild, RequestAddNewLineType} from '../types';
import {PropertyType} from '../components/inputs/inputsGroup/InputGroup';

/**
 * useLine hook for render addNewLine, deleteLine, updateLine
 * @param line
 * @param parentId
 * @param eID
 * @return addNewLineIsLoading
 * @return isEditing
 * @return handleAddNewLine
 * @return addNewLineError
 * @return deleteLineHandler
 * @return deleteLineIsLoading
 * @return updateLineIsLoading
 * @return handleDoubleClick
 * @return updatedLine
 * @return handleKeyPress
 * @return handleInputChange
 */
export const useListItemHook = (
  line: LinesListResponseChild,
  parentId:  number | null | undefined,
  eID: number,
) => {

  /**
   * thunk for addNewLine
   * @return addNewLine
   * @return addNewLineError
   * @return addNewLineIsLoading
   */
  const [addNewLine,
    {
      error: addNewLineError,
      isLoading: addNewLineIsLoading,
    },
  ] = SWSApi.useAddNewLineMutation();

  /**
   * thunk for deleteLine
   * @return deleteLine
   * @return deleteLineIsLoading
   */
  const [deleteLine,
    {
      isLoading: deleteLineIsLoading,
    },
  ] = SWSApi.useDeleteLinesMutation();

  /**
   * thunk for updateLine
   * @return updateLine
   * @return updateLineIsLoading
   */
  const [updateLine,
    {
      isLoading: updateLineIsLoading,
    },
  ] = SWSApi.useUpdateLineMutation();

  /**
   * state for edit data in input
   * @return isEditing
   * @return setIsEditing
   */
  const [isEditing, setIsEditing] = useState<boolean>(false);

  /**
   * state for data in body
   * @return updatedLine
   * @return setUpdatedLine
   */
  const [updatedLine, setUpdatedLine] = useState<RequestAddNewLineType>({
    equipmentCosts: line.equipmentCosts,
    estimatedProfit: line.estimatedProfit,
    machineOperatorSalary: line.machineOperatorSalary,
    mainCosts: line.mainCosts,
    materials: 0,
    mimExploitation: 0,
    overheads: 0,
    parentId: parentId !== undefined ? parentId : line.id,
    rowName: line.rowName,
    salary: 0,
    supportCosts: 0,
  });

  /**
   * async function for added new line
   * @function addNewLine
   * @param newLine
   * @param eID
   */
  const handleAddNewLine = useCallback(async  () => {
    const newLine: RequestAddNewLineType = {
      equipmentCosts: 0,
      estimatedProfit: 0,
      machineOperatorSalary: 0,
      mainCosts: 0,
      materials: 0,
      mimExploitation: 0,
      overheads: 0,
      parentId: line.id,
      rowName: `New Line ${line.id}`,
      salary: 0,
      supportCosts: 0,
    };
    await addNewLine({newLine: newLine, eID: +eID!});
  }, [addNewLine, line.id, eID]);

  /**
   * async function for update data
   */
  const handleUpdateLine = async () => {
    await updateLine({updatedLine, eID: +eID!, rID: line.id});
    setIsEditing((prevState => !prevState));
  };

  const handleDoubleClick = () => {
    setIsEditing(prevState => !prevState);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>, property: PropertyType) => {
    const inputValue = event.target.value;
    setUpdatedLine((prevLine) => ({
      ...prevLine,
      [property]: inputValue,
    }));
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleUpdateLine();
    }
  };

  /**
   * function for delete line
   * @param eID
   * @param rID
   */
  const deleteLineHandler = (eID: number, rID: number) => {
    deleteLine({eID, rID});
  };

  return {
    isEditing, handleAddNewLine,
    deleteLineHandler, handleDoubleClick,
    updatedLine, handleInputChange,
    handleKeyPress, addNewLineError,
    addNewLineIsLoading, deleteLineIsLoading, updateLineIsLoading,
  };
};
