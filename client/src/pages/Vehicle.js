import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Dropdown from '../components/dropdown';
import PartNumber from '../components/partNumber';
import DarkModeToggle from '../components/darkModeToggle';
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
    initialFetch();
  }, []);
  
  const handleMakeChange = async (make) => {
    setSelectedMake(make);
    setSelectedModel('');
    setSelectedType('');
    
    try {
        const response = await fetchModels(make);
        setModels(response);
    } catch (error) {
        console.error('Error fetching makes:', error);
    } 
  };

  const handleModelChange = async (model) => {
    setSelectedModel(model);
    setSelectedType('');
    
    try {
        const response = await fetchTypes(selectedMake, model);
        setTypes(response);
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
    <div className="min-h-screen bg-orange-50 dark:bg-neutral-900 flex flex-col items-center justify-center p-4">
      <DarkModeToggle/>
      <div className="bg-white dark:bg-neutral-800 shadow-md rounded p-6 w-full max-w-md md:max-w-lg lg:max-w-xl">
      <h1 className="dark:text-slate-100 text-3xl font-bold mb-6 text-center">Vehicle Parts Finder</h1>
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
    </div>
  );
};

export default Vehicle;
