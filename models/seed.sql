ALTER TABLE `medicaldb`.`Doctors` 
CHANGE COLUMN `createdAt` `createdAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ,
CHANGE COLUMN `UpdatedAt` `updatedAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ;
INSERT INTO Doctors (name) VALUES ('Dr. John Deer');
INSERT INTO Doctors (name) VALUES ('Dr. Marcia Rose');
INSERT INTO Doctors (name) VALUES ('Dr. Louis Man');

ALTER TABLE `medicaldb`.`Patients` 
CHANGE COLUMN `createdAt` `createdAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ,
CHANGE COLUMN `UpdatedAt` `updatedAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ;
INSERT INTO Patients (name, medicalHistory, DoctorId ) VALUES ('Louisa Smith', "Has alot of issues", 1);
INSERT INTO Patients (name, medicalHistory, DoctorId ) VALUES ('Joanna Pruitt', "Visits every week", 2);
INSERT INTO Patients (name, medicalHistory, DoctorId ) VALUES ('Ross Davis', "Loves cats", 3);
INSERT INTO Patients (name, medicalHistory, DoctorId ) VALUES ('Grant Lawson', "Has a dog named James", 1);
INSERT INTO Patients (name, medicalHistory, DoctorId ) VALUES ('Jean Thomas', "Wants to be a nurse", 2);
INSERT INTO Patients (name, medicalHistory, DoctorId ) VALUES ('Clementine Rodgers', "Lives near the beach", 3);
INSERT INTO Patients (name, medicalHistory, DoctorId ) VALUES ('Gregory Williams', "Goes by Butch", 1);
INSERT INTO Patients (name, medicalHistory, DoctorId ) VALUES ('Cane Goose', "Has allergies", 2);

