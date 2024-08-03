import React from 'react';
import { PDFDownloadLink, Document, Page, Text, View, StyleSheet, pdf } from '@react-pdf/renderer';

// Sample employee data
const sampleEmployeeData = {
  name: 'John Doe',
  position: 'Software Engineer',
  department: 'Development',
  email: 'john.doe@example.com',
  phone: '123-456-7890',
  address: '1234 Elm Street, City, Country',
};

// Define styles for the PDF document
const styles = StyleSheet.create({
  page: {
    padding: 30,
  },
  section: {
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    marginBottom: 10,
  },
  text: {
    fontSize: 12,
    marginBottom: 5,
  },
});

// PDF Document Component
const EmployeeDocument = ({ employeeData }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.title}>{employeeData.name}</Text>
        <Text style={styles.text}>Position: {employeeData.position}</Text>
        <Text style={styles.text}>Department: {employeeData.department}</Text>
        <Text style={styles.text}>Email: {employeeData.email}</Text>
        <Text style={styles.text}>Phone: {employeeData.phone}</Text>
        <Text style={styles.text}>Address: {employeeData.address}</Text>

        {/* Add more fields as needed */}
      </View>
    </Page>
  </Document>
);

// Main Component for PDF Preview and Download
const EmployeeDataPDF = () => {
  const [instance, setInstance] = React.useState(null);

  React.useEffect(() => {
    const generateInstance = async () => {
      const blob = await pdf(<EmployeeDocument employeeData={sampleEmployeeData} />).toBlob();
      setInstance(blob);
    };

    generateInstance();
  }, []);

  return (
    <div>
      <h1>Employee Data</h1>
      {/* PDF Download Link */}
      <PDFDownloadLink
        document={<EmployeeDocument employeeData={sampleEmployeeData} />}
        fileName="employee_data.pdf"
      >
        {({ loading }) => (loading ? 'Generating PDF...' : 'Download PDF')}
      </PDFDownloadLink>

      {/* PDF Preview */}
      {instance && (
        <object data={URL.createObjectURL(instance)} type="application/pdf" width="100%" height="500px">
          <p>Preview is not available in your browser. <a href={URL.createObjectURL(instance)}>Download the PDF</a>.</p>
        </object>
      )}
    </div>
  );
};

export default EmployeeDataPDF;
