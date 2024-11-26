#include <iostream>
#include <fstream>
#include <sstream>
#include <vector>
#include <string>

using namespace std;

// Function to split a string by a delimiter, handling quoted fields with commas
vector<string> split(const string& s, char delimiter) {
    vector<string> tokens;
    string token;
    bool insideQuotes = false;

    for (size_t i = 0; i < s.length(); ++i) {
        char currentChar = s[i];

        if (currentChar == '"') {
            insideQuotes = !insideQuotes;  // Toggle insideQuotes flag when encountering double quotes
        } else if (currentChar == delimiter && !insideQuotes) {
            tokens.push_back(token);
            token.clear();
        } else {
            token += currentChar;  // Add character to the current token
        }
    }

    // Add the last token
    tokens.push_back(token);

    return tokens;
}

void convertCSVtoJSON(const string& csvFile, const string& jsonFile) {
    ifstream inputFile(csvFile);
    ofstream outputFile(jsonFile);

    if (!inputFile.is_open() || !outputFile.is_open()) {
        cerr << "Error opening files." << endl;
        return;
    }

    string line;
    vector<string> headers;
    bool isHeader = true;
    vector<vector<string> > rows;

    // Read CSV and convert to JSON
    while (getline(inputFile, line)) {
        vector<string> tokens = split(line, ',');
        if (isHeader) {
            headers = tokens;  // First row is the header
            isHeader = false;
        } else {
            rows.push_back(tokens);
        }
    }

    // Write JSON to output file
    outputFile << "[\n";
    for (size_t i = 0; i < rows.size(); ++i) {
        outputFile << "  {\n";
        for (size_t j = 0; j < headers.size(); ++j) {
            outputFile << "    \"" << headers[j] << "\": ";

            if (headers[j] == "images") {
                // Split images field by commas
                vector<string> images = split(rows[i][j], ',');
                outputFile << "[";
                for (size_t k = 0; k < images.size(); ++k) {
                    outputFile << "\"" << images[k] << "\"";
                    if (k != images.size() - 1) {
                        outputFile << ", ";
                    }
                }
                outputFile << "]";
            } else {
                outputFile << "\"" << rows[i][j] << "\"";
            }

            if (j != headers.size() - 1) {
                outputFile << ",";  // Only add comma if it's not the last property
            }
            outputFile << "\n";
        }
        outputFile << "  }";
        if (i != rows.size() - 1) {
            outputFile << ",";  // Only add comma if it's not the last object
        }
        outputFile << "\n";
    }
    outputFile << "]";

    inputFile.close();
    outputFile.close();

    cout << "Conversion completed! JSON written to " << jsonFile << endl;
}

int main() {
    string csvFile = "input.csv";
    string jsonFile = "output.json";

    convertCSVtoJSON(csvFile, jsonFile);

    return 0;
}
