
import { useEffect } from 'react';

const Index = () => {
  useEffect(() => {
    // Initialize the funnel builder when component mounts
    const script = document.createElement('script');
    script.src = '/funnel-builder.js';
    script.onload = () => {
      // Script loaded, GrapesJS should be initialized
    };
    document.head.appendChild(script);

    return () => {
      // Cleanup
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="w-full h-screen">
      <div id="funnel-builder-container" className="w-full h-full">
        {/* Toolbar */}
        <div id="toolbar" className="bg-gray-800 text-white p-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <h1 className="text-xl font-bold">Funnel Builder</h1>
            <button id="save-btn" className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded">Save</button>
            <button id="preview-btn" className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded">Preview</button>
            <button id="export-btn" className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded">Export</button>
          </div>
          
          <div className="flex items-center space-x-4">
            {/* Template Selector */}
            <select id="template-selector" className="bg-gray-700 text-white px-3 py-2 rounded">
              <option value="">Select Template</option>
              <option value="template1">Landing Page</option>
              <option value="template2">Product Launch</option>
              <option value="template3">Lead Generation</option>
              <option value="template4">Sales Page</option>
              <option value="template5">Webinar Registration</option>
              <option value="template6">Newsletter Signup</option>
              <option value="template7">E-commerce</option>
              <option value="template8">App Download</option>
              <option value="template9">Course Enrollment</option>
              <option value="template10">Event Registration</option>
            </select>
            
            {/* Font Selector */}
            <select id="font-selector" className="bg-gray-700 text-white px-3 py-2 rounded">
              <option value="Arial">Arial</option>
              <option value="Helvetica">Helvetica</option>
              <option value="Georgia">Georgia</option>
              <option value="Times New Roman">Times New Roman</option>
              <option value="Roboto">Roboto</option>
              <option value="Open Sans">Open Sans</option>
              <option value="Lato">Lato</option>
              <option value="Montserrat">Montserrat</option>
            </select>
            
            {/* Color Picker */}
            <input type="color" id="color-picker" className="w-10 h-10 rounded cursor-pointer" />
            
            {/* Image Upload */}
            <input type="file" id="image-upload" accept="image/*" className="hidden" />
            <button id="upload-btn" className="bg-orange-600 hover:bg-orange-700 px-4 py-2 rounded">Upload Image</button>
          </div>
        </div>

        {/* Editor Container */}
        <div className="flex h-full">
          {/* Components Panel */}
          <div id="blocks" className="w-64 bg-gray-100 border-r border-gray-300 overflow-y-auto"></div>
          
          {/* Main Editor */}
          <div className="flex-1 flex flex-col">
            <div id="gjs" className="flex-1"></div>
          </div>
          
          {/* Properties Panel */}
          <div className="w-80 bg-gray-50 border-l border-gray-300">
            <div id="styles-container" className="h-1/2 overflow-y-auto p-4">
              <h3 className="font-bold mb-2">Styles</h3>
              <div id="styles"></div>
            </div>
            <div id="traits-container" className="h-1/2 overflow-y-auto p-4 border-t border-gray-300">
              <h3 className="font-bold mb-2">Properties</h3>
              <div id="traits"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
