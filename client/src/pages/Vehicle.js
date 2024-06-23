import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Dropdown from '../components/dropdown';
import PartNumber from '../components/partNumber';
import  {fetchMakes, fetchModels, fetchTypes, fetchPartNumber } from '../data/repository_laravel';

const Vehicle = () => {
  const [makes, setMakes] = useState([]);
  const [models, setModels] = useState([]);
  const [types, setTypes] = useState([]);
  const [selectedMake, setSelectedMake] = useState('');
  const [selectedModel, setSelectedModel] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [partNumber, setPartNumber] = useState('');

  useEffect(() => {
    const initialFetch = async() => {
        const response = await fetchMakes();
        setMakes(response);
    }
  }, []);
  
  const handleMakeChange = async (make) => {
    setSelectedMake(make);
    setSelectedModel('');
    setSelectedType('');
    setPartNumber('');
    try {
        const response = await fetchModels(make);
        setMakes(response);
    } catch (error) {
        console.error('Error fetching makes:', error);
    } 
  };

  const handleModelChange = async (model) => {
    setSelectedModel(model);
    setSelectedType('');
    setPartNumber('');
    
    try {
        const response = await fetchTypes(selectedMake, model);
        setModels(response);
    } catch (error) {
        console.error(`Error fetching models for ${selectedMake}:`, error);
    } 
  };

  const handleTypeChange = async (type) => {
    setSelectedType(type);
    try {
        const response = await fetchPartNumber(selectedMake, selectedModel, type);
        setPartNumber(response);
    } catch (error) {
        console.error(`Error fetching types for ${selectedMake}, ${selectedModel}:`, error);
    } 
  };

  return (
    <div className="App">
      <h1>Vehicle Parts App</h1>
      <Dropdown
        label="Select Make:"
        options={makes}
        selectedOption={selectedMake}
        onChange={handleMakeChange}
      />
      <Dropdown
        label="Select Model:"
        options={models}
        selectedOption={selectedModel}
        onChange={handleModelChange}
        disabled={!selectedMake}
      />
      <Dropdown
        label="Select Type:"
        options={types}
        selectedOption={selectedType}
        onChange={handleTypeChange}
        disabled={!selectedModel}
      />
      {partNumber && <PartNumber partNumber={partNumber} />}
    </div>
  );
};

export default Vehicle;