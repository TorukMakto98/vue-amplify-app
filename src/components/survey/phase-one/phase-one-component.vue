<template>
    <link rel="canonical" href="https://getbootstrap.com/docs/4.0/examples/dashboard/">

  <!-- Bootstrap core CSS -->
    <link href="../../dist/css/bootstrap.min.css" rel="stylesheet">

  <!-- Custom styles for this template -->
    <link href="dashboard.css" rel="stylesheet">
    <body>
    <main>
        <div class="container text-center">
            <div class="row">
                <div class="col">
                    <div class="p-3 mb-2 bg-primary bg-gradient text-white shadow rounded">
                        <h3>Introduction</h3>
                        Before we get into the direct questions of the survey, we would like to ask a little about your
                        level of
                        knowledge regarding our covered topics. This will give us a better overview of your background
                        and help us
                        contextualise your following answers inside this study.
                    </div>
                    <br>
                    <form>
                        <div class="shadow-lg p-3 mb-5 bg-body-tertiary rounded">
                            <div class="mb-3">
                                <label for="phase1-q1" class="form-label"><h2>1</h2> How familiar are you with the field
                                    of Artificial Intelligence? Please rate your familiarity on a scale of 1 to 5, where
                                    1 indicates "not familiar at all" and 5 indicates "very familiar."</label>
                                <!--    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">-->
                                <div class="range">
                                    <input type="range" class="form-range" min="1" max="5" id="phase1-q1" v-model="q1"/>
                                </div>
                                <span class="badge rounded-pill text-bg-primary">{{ this.q1 }}</span>
                            </div>
                            <!--              <div class="mt-2">Value: {{ this.q1 }}</div>-->
                        </div>
                        <div class="shadow-lg p-3 mb-5 bg-body-tertiary rounded">
                            <div class="mb-3">
                                <label for="phase1-q2" class="form-label"><h2>2</h2>Are you familiar with the term
                                    "Machine Learning"?</label>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="phase1-q2-1" id="phase1-q2"
                                           value="true"
                                           v-model="q2">
                                    <label class="form-check-label" for="phase1-q2">
                                        Yes, I am familiar with the term.
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="phase1-q2-2" id="phase1-q2"
                                           value="false" checked
                                           v-model="q2">
                                    <label class="form-check-label" for="phase1-q2">
                                        No, the term is unfamiliar to me.
                                    </label>
                                </div>
                            </div>
                            <!--              <div>Value: {{ this.q2 }}</div>-->
                        </div>
                        <div class="shadow-lg p-3 mb-5 bg-body-tertiary rounded" v-if="this.q2 === 'true'"
                             id="indented_right">
                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label"><h2>2.1</h2> If yes, choose one of
                                    the following definitions,
                                    which is in your opinion suitable for machine learning?</label>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="phase1-q3" id="phase1-q3"
                                           value="def1"
                                           v-model="q3">
                                    <label class="form-check-label" for="phase1-q3">
                                        Machine learning is the process of creating software that can learn and
                                        adapt to new data without being explicitly programmed.
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="phase1-q3" id="phase1-q3"
                                           value="def2" checked
                                           v-model="q3">
                                    <label class="form-check-label" for="phase1-q3">
                                        Machine learning is the process of developing software that can operate without
                                        being connected to the internet.
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="phase1-q3" id="phase1-q3"
                                           value="def3" checked
                                           v-model="q3">
                                    <label class="form-check-label" for="phase1-q3">
                                        Machine learning is the process of creating algorithms that can only be run on
                                        specialized hardware.
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="phase1-q3" id="phase1-q3"
                                           value="def4" checked
                                           v-model="q3">
                                    <label class="form-check-label" for="phase1-q3">
                                        Machine learning is the process of developing software that can analyze data,
                                        but cannot improve its performance over time.
                                    </label>
                                </div>
                                <!--              <div>Value: {{ q3 }}</div>-->
                            </div>
                        </div>
                        <div class="shadow-lg p-3 mb-5 bg-body-tertiary rounded" v-if="this.q2 === 'true'"
                             id="indented_right">
                            <div class="mb-3">
                                <label for="phase1-q4" class="form-label"><h2>2.2</h2> How familiar are you with the
                                    field of Machine Learning? Please rate your familiarity on a scale of 1 to 5,
                                    where 1 indicates "not familiar at all" and 5 indicates "very familiar."</label>
                                <div class="range">
                                    <input type="range" class="form-range" min="1" max="5" id="phase1-q4" v-model="q4"/>
                                </div>
                                <span class="badge rounded-pill text-bg-primary">{{ this.q4 }}</span>
                            </div>
                            <!--            <div>Value: {{ q4 }}</div>-->
                        </div>
                        <div class="shadow-lg p-3 mb-5 bg-body-tertiary rounded">
                            <div class="mb-3">
                                <label for="phase1-q5" class="form-label"><h2>3</h2>Are you familiar with the term
                                    "Reinforcement Learning"</label>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" value="true" name="flexRadioDefault"
                                           id="phase1-q5"
                                           v-model="q5">
                                    <label class="form-check-label" for="flexRadioDefault7">
                                        Yes, I am familiar with the term.
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" value="false" name="phase1-q5"
                                           id="phase1-q5" checked
                                           v-model="q5">
                                    <label class="form-check-label" for="phase1-q5">
                                        No, the term is unfamiliar to me.
                                    </label>
                                </div>
                                <!--                              <div>Value: {{ q5 }}</div>-->
                            </div>
                        </div>
                        <div v-if="this.q5 === 'true'" class="shadow-lg p-3 mb-5 bg-body-tertiary rounded"
                             id="indented_right">
                            <div class="mb-3">
                                <label for="phase1-q6" class="form-label"><h2>3.1</h2>Please rate your familiarity with
                                    the concept of Reinforcement Learning on a scale of 1 to 5, where 1 indicates "not
                                    familiar at all" and 5 indicates "very familiar".</label>
                                <div class="range">
                                    <input type="range" class="form-range" min="1" max="5" id="phase1-q6" v-model="q6"/>
                                </div>
                                <span class="badge rounded-pill text-bg-primary">{{ this.q6 }}</span>
                                <!--              <div>Value: {{ q6 }}</div>-->
                            </div>
                        </div>

                        <div class="shadow-lg p-3 mb-5 bg-body-tertiary rounded">
                            <div class="mb-3">
                                <label for="phase1-q7" class="form-label"><h2>4</h2>Please rate your level of interest
                                    in topics related to artificial intelligence on a scale of 1 to 5, where 1 indicates
                                    "not interested at all" and 5 indicates "very interested."</label>
                                <div class="range">
                                    <input type="range" class="form-range" min="1" max="5" id="phase1-q7" v-model="q7"/>
                                </div>
                                <span class="badge rounded-pill text-bg-primary">{{ this.q7 }}</span>
                                <!--              <div>Value: {{ q7 }}</div>-->
                            </div>
                        </div>

                        <div class="shadow-lg p-3 mb-5 bg-body-tertiary rounded">
                            <div class="mb-3">
                                <label for="phase1-q7" class="form-label"><h2>5</h2>Please rate, on a scale of 1 to 5,
                                    the frequency at which you play video games in your spare time, where 1 stands for
                                    "never" and 5 stands for "often".</label>
                                <div class="range">
                                    <input type="range" class="form-range" min="1" max="5" id="phase1-q8" v-model="q8"/>
                                </div>
                                <span class="badge rounded-pill text-bg-primary">{{ this.q8 }}</span>
                                <!--              <div>Value: {{ q7 }}</div>-->
                            </div>
                        </div>

                        <div class="shadow-lg p-3 mb-5 bg-body-tertiary rounded">
                            <div class="mb-3">
                                <label for="phase1-q9" class="form-label"><h2>6</h2>What is your current status?</label>
                                <div class="range">
                                    <select id="industry-dropdown" class="form-select" aria-label="Industry dropdown"
                                            v-model="this.q9" required>
                                        <option value="" selected>Select your status from the list...</option>
                                        <option value="student">Student</option>
                                        <option value="employee">Employee</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                                <!--                                <span class="badge rounded-pill text-bg-primary">{{ this.q8 }}</span>-->
                                <!--              <div>Value: {{ q7 }}</div>-->
                            </div>
                        </div>

                        <div class="shadow-lg p-3 mb-5 bg-body-tertiary rounded" v-if="this.q9 === 'employee'"
                             id="indented_right">
                            <div class="mb-3">
                                <label for="phase1-q10" class="form-label"><h2>6.1</h2>In which industry do you
                                    work?</label>
                                <select class="form-select" aria-label="Default select example" v-model="this.q10">
                                    <option selected>Select your industry from the list...</option>
                                    <option value="Accounting">Accounting</option>
                                    <option value="Airlines/Aviation">Airlines/Aviation</option>
                                    <option value="Alternative Dispute Resolution">Alternative Dispute Resolution
                                    </option>
                                    <option value="Alternative Medicine">Alternative Medicine</option>
                                    <option value="Animation">Animation</option>
                                    <option value="Apparel/Fashion">Apparel/Fashion</option>
                                    <option value="Architecture/Planning">Architecture/Planning</option>
                                    <option value="Arts/Crafts">Arts/Crafts</option>
                                    <option value="Automotive">Automotive</option>
                                    <option value="Aviation/Aerospace">Aviation/Aerospace</option>
                                    <option value="Banking/Mortgage">Banking/Mortgage</option>
                                    <option value="Biotechnology/Greentech">Biotechnology/Greentech</option>
                                    <option value="Broadcast Media">Broadcast Media</option>
                                    <option value="Building Materials">Building Materials</option>
                                    <option value="Business Supplies/Equipment">Business Supplies/Equipment</option>
                                    <option value="Capital Markets/Hedge Fund/Private Equity">Capital Markets/Hedge
                                        Fund/Private Equity
                                    </option>
                                    <option value="Chemicals">Chemicals</option>
                                    <option value="Civic/Social Organization">Civic/Social Organization</option>
                                    <option value="Civil Engineering">Civil Engineering</option>
                                    <option value="Commercial Real Estate">Commercial Real Estate</option>
                                    <option value="Computer Games">Computer Games</option>
                                    <option value="Computer Hardware">Computer Hardware</option>
                                    <option value="Computer Networking">Computer Networking</option>
                                    <option value="Computer Software/Engineering">Computer Software/Engineering</option>
                                    <option value="Computer/Network Security">Computer/Network Security</option>
                                    <option value="Construction">Construction</option>
                                    <option value="Consumer Electronics">Consumer Electronics</option>
                                    <option value="Consumer Goods">Consumer Goods</option>
                                    <option value="Consumer Services">Consumer Services</option>
                                    <option value="Cosmetics">Cosmetics</option>
                                    <option value="Dairy">Dairy</option>
                                    <option value="Defense/Space">Defense/Space</option>
                                    <option value="Design">Design</option>
                                    <option value="E-Learning">E-Learning</option>
                                    <option value="Education Management">Education Management</option>
                                    <option value="Electrical/Electronic Manufacturing">Electrical/Electronic
                                        Manufacturing
                                    </option>
                                    <option value="Entertainment/Movie Production">Entertainment/Movie Production
                                    </option>
                                    <option value="Environmental Services">Environmental Services</option>
                                    <option value="Events Services">Events Services</option>
                                    <option value="Executive Office">Executive Office</option>
                                    <option value="Facilities Services">Facilities Services</option>
                                    <option value="Farming">Farming</option>
                                    <option value="Financial Services">Financial Services</option>
                                    <option value="Fine Art">Fine Art</option>
                                    <option value="Fishery">Fishery</option>
                                    <option value="Food Production">Food Production</option>
                                    <option value="Food/Beverages">Food/Beverages</option>
                                    <option value="Fundraising">Fundraising</option>
                                    <option value="Furniture">Furniture</option>
                                    <option value="Gambling/Casinos">Gambling/Casinos</option>
                                    <option value="Glass/Ceramics/Concrete">Glass/Ceramics/Concrete</option>
                                    <option value="Government Administration">Government Administration</option>
                                    <option value="Government Relations">Government Relations</option>
                                    <option value="Graphic Design/Web Design">Graphic Design/Web Design</option>
                                    <option value="Health/Fitness">Health/Fitness</option>
                                    <option value="Higher Education/Acadamia">Higher Education/Acadamia</option>
                                    <option value="Hospital/Health Care">Hospital/Health Care</option>
                                    <option value="Hospitality">Hospitality</option>
                                    <option value="Human Resources/HR">Human Resources/HR</option>
                                    <option value="Import/Export">Import/Export</option>
                                    <option value="Individual/Family Services">Individual/Family Services</option>
                                    <option value="Industrial Automation">Industrial Automation</option>
                                    <option value="Information Services">Information Services</option>
                                    <option value="Information Technology/IT">Information Technology/IT</option>
                                    <option value="Insurance">Insurance</option>
                                    <option value="International Affairs">International Affairs</option>
                                    <option value="International Trade/Development">International Trade/Development
                                    </option>
                                    <option value="Internet">Internet</option>
                                    <option value="Investment Banking/Venture">Investment Banking/Venture</option>
                                    <option value="Investment Management/Hedge Fund/Private Equity">Investment
                                        Management/Hedge
                                        Fund/Private Equity
                                    </option>
                                    <option value="Judiciary">Judiciary</option>
                                    <option value="Law Enforcement">Law Enforcement</option>
                                    <option value="Law Practice/Law Firms">Law Practice/Law Firms</option>
                                    <option value="Legal Services">Legal Services</option>
                                    <option value="Legislative Office">Legislative Office</option>
                                    <option value="Leisure/Travel">Leisure/Travel</option>
                                    <option value="Library">Library</option>
                                    <option value="Logistics/Procurement">Logistics/Procurement</option>
                                    <option value="Luxury Goods/Jewelry">Luxury Goods/Jewelry</option>
                                    <option value="Machinery">Machinery</option>
                                    <option value="Management Consulting">Management Consulting</option>
                                    <option value="Maritime">Maritime</option>
                                    <option value="Market Research">Market Research</option>
                                    <option value="Marketing/Advertising/Sales">Marketing/Advertising/Sales</option>
                                    <option value="Mechanical or Industrial Engineering">Mechanical or Industrial
                                        Engineering
                                    </option>
                                    <option value="Media Production">Media Production</option>
                                    <option value="Medical Equipment">Medical Equipment</option>
                                    <option value="Medical Practice">Medical Practice</option>
                                    <option value="Mental Health Care">Mental Health Care</option>
                                    <option value="Military Industry">Military Industry</option>
                                    <option value="Mining/Metals">Mining/Metals</option>
                                    <option value="Motion Pictures/Film">Motion Pictures/Film</option>
                                    <option value="Museums/Institutions">Museums/Institutions</option>
                                    <option value="Music">Music</option>
                                    <option value="Nanotechnology">Nanotechnology</option>
                                    <option value="Newspapers/Journalism">Newspapers/Journalism</option>
                                    <option value="Non-Profit/Volunteering">Non-Profit/Volunteering</option>
                                    <option value="Oil/Energy/Solar/Greentech">Oil/Energy/Solar/Greentech</option>
                                    <option value="Online Publishing">Online Publishing</option>
                                    <option value="Other Industry">Other Industry</option>
                                    <option value="Outsourcing/Offshoring">Outsourcing/Offshoring</option>
                                    <option value="Package/Freight Delivery">Package/Freight Delivery</option>
                                    <option value="Packaging/Containers">Packaging/Containers</option>
                                    <option value="Paper/Forest Products">Paper/Forest Products</option>
                                    <option value="Performing Arts">Performing Arts</option>
                                    <option value="Pharmaceuticals">Pharmaceuticals</option>
                                    <option value="Philanthropy">Philanthropy</option>
                                    <option value="Photography">Photography</option>
                                    <option value="Plastics">Plastics</option>
                                    <option value="Political Organization">Political Organization</option>
                                    <option value="Primary/Secondary Education">Primary/Secondary Education</option>
                                    <option value="Printing">Printing</option>
                                    <option value="Professional Training">Professional Training</option>
                                    <option value="Program Development">Program Development</option>
                                    <option value="Public Relations/PR">Public Relations/PR</option>
                                    <option value="Public Safety">Public Safety</option>
                                    <option value="Publishing Industry">Publishing Industry</option>
                                    <option value="Railroad Manufacture">Railroad Manufacture</option>
                                    <option value="Ranching">Ranching</option>
                                    <option value="Real Estate/Mortgage">Real Estate/Mortgage</option>
                                    <option value="Recreational Facilities/Services">Recreational Facilities/Services
                                    </option>
                                    <option value="Religious Institutions">Religious Institutions</option>
                                    <option value="Renewables/Environment">Renewables/Environment</option>
                                    <option value="Research Industry">Research Industry</option>
                                    <option value="Restaurants">Restaurants</option>
                                    <option value="Retail Industry">Retail Industry</option>
                                    <option value="Security/Investigations">Security/Investigations</option>
                                    <option value="Semiconductors">Semiconductors</option>
                                    <option value="Shipbuilding">Shipbuilding</option>
                                    <option value="Sporting Goods">Sporting Goods</option>
                                    <option value="Sports">Sports</option>
                                    <option value="Staffing/Recruiting">Staffing/Recruiting</option>
                                    <option value="Supermarkets">Supermarkets</option>
                                    <option value="Telecommunications">Telecommunications</option>
                                    <option value="Textiles">Textiles</option>
                                    <option value="Think Tanks">Think Tanks</option>
                                    <option value="Tobacco">Tobacco</option>
                                    <option value="Translation/Localization">Translation/Localization</option>
                                    <option value="Transportation">Transportation</option>
                                    <option value="Utilities">Utilities</option>
                                    <option value="Venture Capital/VC">Venture Capital/VC</option>
                                    <option value="Veterinary">Veterinary</option>
                                    <option value="Warehousing">Warehousing</option>
                                    <option value="Wholesale">Wholesale</option>
                                    <option value="Wine/Spirits">Wine/Spirits</option>
                                    <option value="Wireless">Wireless</option>
                                    <option value="Writing/Editing">Writing/Editing</option>
                                </select>
                                <!--                <span class="badge rounded-pill text-bg-primary">{{ this.q8 }}</span>-->
                                <!--              <div>Value: {{ q7 }}</div>-->
                            </div>
                        </div>

                        <div class="shadow-lg p-3 mb-5 bg-body-tertiary rounded" v-if="this.q9 === 'student'"
                             id="indented_right">
                            <div class="mb-3">
                                <label for="phase1-q11" class="form-label"><h2>6.1</h2>What field are you
                                    studying?</label>
                                <select class="form-select" aria-label="Default select example" v-model="this.q11">
                                    <option selected>Select your industry from the list...</option>
                                    <option value="Accounting">Accounting</option>
                                    <option value="Airlines/Aviation">Airlines/Aviation</option>
                                    <option value="Alternative Dispute Resolution">Alternative Dispute Resolution
                                    </option>
                                    <option value="Alternative Medicine">Alternative Medicine</option>
                                    <option value="Animation">Animation</option>
                                    <option value="Apparel/Fashion">Apparel/Fashion</option>
                                    <option value="Architecture/Planning">Architecture/Planning</option>
                                    <option value="Arts/Crafts">Arts/Crafts</option>
                                    <option value="Automotive">Automotive</option>
                                    <option value="Aviation/Aerospace">Aviation/Aerospace</option>
                                    <option value="Banking/Mortgage">Banking/Mortgage</option>
                                    <option value="Biotechnology/Greentech">Biotechnology/Greentech</option>
                                    <option value="Broadcast Media">Broadcast Media</option>
                                    <option value="Building Materials">Building Materials</option>
                                    <option value="Business Supplies/Equipment">Business Supplies/Equipment</option>
                                    <option value="Capital Markets/Hedge Fund/Private Equity">Capital Markets/Hedge
                                        Fund/Private Equity
                                    </option>
                                    <option value="Chemicals">Chemicals</option>
                                    <option value="Civic/Social Organization">Civic/Social Organization</option>
                                    <option value="Civil Engineering">Civil Engineering</option>
                                    <option value="Commercial Real Estate">Commercial Real Estate</option>
                                    <option value="Computer Games">Computer Games</option>
                                    <option value="Computer Hardware">Computer Hardware</option>
                                    <option value="Computer Networking">Computer Networking</option>
                                    <option value="Computer Software/Engineering">Computer Software/Engineering</option>
                                    <option value="Computer/Network Security">Computer/Network Security</option>
                                    <option value="Construction">Construction</option>
                                    <option value="Consumer Electronics">Consumer Electronics</option>
                                    <option value="Consumer Goods">Consumer Goods</option>
                                    <option value="Consumer Services">Consumer Services</option>
                                    <option value="Cosmetics">Cosmetics</option>
                                    <option value="Dairy">Dairy</option>
                                    <option value="Defense/Space">Defense/Space</option>
                                    <option value="Design">Design</option>
                                    <option value="E-Learning">E-Learning</option>
                                    <option value="Education Management">Education Management</option>
                                    <option value="Electrical/Electronic Manufacturing">Electrical/Electronic
                                        Manufacturing
                                    </option>
                                    <option value="Entertainment/Movie Production">Entertainment/Movie Production
                                    </option>
                                    <option value="Environmental Services">Environmental Services</option>
                                    <option value="Events Services">Events Services</option>
                                    <option value="Executive Office">Executive Office</option>
                                    <option value="Facilities Services">Facilities Services</option>
                                    <option value="Farming">Farming</option>
                                    <option value="Financial Services">Financial Services</option>
                                    <option value="Fine Art">Fine Art</option>
                                    <option value="Fishery">Fishery</option>
                                    <option value="Food Production">Food Production</option>
                                    <option value="Food/Beverages">Food/Beverages</option>
                                    <option value="Fundraising">Fundraising</option>
                                    <option value="Furniture">Furniture</option>
                                    <option value="Gambling/Casinos">Gambling/Casinos</option>
                                    <option value="Glass/Ceramics/Concrete">Glass/Ceramics/Concrete</option>
                                    <option value="Government Administration">Government Administration</option>
                                    <option value="Government Relations">Government Relations</option>
                                    <option value="Graphic Design/Web Design">Graphic Design/Web Design</option>
                                    <option value="Health/Fitness">Health/Fitness</option>
                                    <option value="Higher Education/Acadamia">Higher Education/Acadamia</option>
                                    <option value="Hospital/Health Care">Hospital/Health Care</option>
                                    <option value="Hospitality">Hospitality</option>
                                    <option value="Human Resources/HR">Human Resources/HR</option>
                                    <option value="Import/Export">Import/Export</option>
                                    <option value="Individual/Family Services">Individual/Family Services</option>
                                    <option value="Industrial Automation">Industrial Automation</option>
                                    <option value="Information Services">Information Services</option>
                                    <option value="Information Technology/IT">Information Technology/IT</option>
                                    <option value="Insurance">Insurance</option>
                                    <option value="International Affairs">International Affairs</option>
                                    <option value="International Trade/Development">International Trade/Development
                                    </option>
                                    <option value="Internet">Internet</option>
                                    <option value="Investment Banking/Venture">Investment Banking/Venture</option>
                                    <option value="Investment Management/Hedge Fund/Private Equity">Investment
                                        Management/Hedge
                                        Fund/Private Equity
                                    </option>
                                    <option value="Judiciary">Judiciary</option>
                                    <option value="Law Enforcement">Law Enforcement</option>
                                    <option value="Law Practice/Law Firms">Law Practice/Law Firms</option>
                                    <option value="Legal Services">Legal Services</option>
                                    <option value="Legislative Office">Legislative Office</option>
                                    <option value="Leisure/Travel">Leisure/Travel</option>
                                    <option value="Library">Library</option>
                                    <option value="Logistics/Procurement">Logistics/Procurement</option>
                                    <option value="Luxury Goods/Jewelry">Luxury Goods/Jewelry</option>
                                    <option value="Machinery">Machinery</option>
                                    <option value="Management Consulting">Management Consulting</option>
                                    <option value="Maritime">Maritime</option>
                                    <option value="Market Research">Market Research</option>
                                    <option value="Marketing/Advertising/Sales">Marketing/Advertising/Sales</option>
                                    <option value="Mechanical or Industrial Engineering">Mechanical or Industrial
                                        Engineering
                                    </option>
                                    <option value="Media Production">Media Production</option>
                                    <option value="Medical Equipment">Medical Equipment</option>
                                    <option value="Medical Practice">Medical Practice</option>
                                    <option value="Mental Health Care">Mental Health Care</option>
                                    <option value="Military Industry">Military Industry</option>
                                    <option value="Mining/Metals">Mining/Metals</option>
                                    <option value="Motion Pictures/Film">Motion Pictures/Film</option>
                                    <option value="Museums/Institutions">Museums/Institutions</option>
                                    <option value="Music">Music</option>
                                    <option value="Nanotechnology">Nanotechnology</option>
                                    <option value="Newspapers/Journalism">Newspapers/Journalism</option>
                                    <option value="Non-Profit/Volunteering">Non-Profit/Volunteering</option>
                                    <option value="Oil/Energy/Solar/Greentech">Oil/Energy/Solar/Greentech</option>
                                    <option value="Online Publishing">Online Publishing</option>
                                    <option value="Other Industry">Other Industry</option>
                                    <option value="Outsourcing/Offshoring">Outsourcing/Offshoring</option>
                                    <option value="Package/Freight Delivery">Package/Freight Delivery</option>
                                    <option value="Packaging/Containers">Packaging/Containers</option>
                                    <option value="Paper/Forest Products">Paper/Forest Products</option>
                                    <option value="Performing Arts">Performing Arts</option>
                                    <option value="Pharmaceuticals">Pharmaceuticals</option>
                                    <option value="Philanthropy">Philanthropy</option>
                                    <option value="Photography">Photography</option>
                                    <option value="Plastics">Plastics</option>
                                    <option value="Political Organization">Political Organization</option>
                                    <option value="Primary/Secondary Education">Primary/Secondary Education</option>
                                    <option value="Printing">Printing</option>
                                    <option value="Professional Training">Professional Training</option>
                                    <option value="Program Development">Program Development</option>
                                    <option value="Public Relations/PR">Public Relations/PR</option>
                                    <option value="Public Safety">Public Safety</option>
                                    <option value="Publishing Industry">Publishing Industry</option>
                                    <option value="Railroad Manufacture">Railroad Manufacture</option>
                                    <option value="Ranching">Ranching</option>
                                    <option value="Real Estate/Mortgage">Real Estate/Mortgage</option>
                                    <option value="Recreational Facilities/Services">Recreational Facilities/Services
                                    </option>
                                    <option value="Religious Institutions">Religious Institutions</option>
                                    <option value="Renewables/Environment">Renewables/Environment</option>
                                    <option value="Research Industry">Research Industry</option>
                                    <option value="Restaurants">Restaurants</option>
                                    <option value="Retail Industry">Retail Industry</option>
                                    <option value="Security/Investigations">Security/Investigations</option>
                                    <option value="Semiconductors">Semiconductors</option>
                                    <option value="Shipbuilding">Shipbuilding</option>
                                    <option value="Sporting Goods">Sporting Goods</option>
                                    <option value="Sports">Sports</option>
                                    <option value="Staffing/Recruiting">Staffing/Recruiting</option>
                                    <option value="Supermarkets">Supermarkets</option>
                                    <option value="Telecommunications">Telecommunications</option>
                                    <option value="Textiles">Textiles</option>
                                    <option value="Think Tanks">Think Tanks</option>
                                    <option value="Tobacco">Tobacco</option>
                                    <option value="Translation/Localization">Translation/Localization</option>
                                    <option value="Transportation">Transportation</option>
                                    <option value="Utilities">Utilities</option>
                                    <option value="Venture Capital/VC">Venture Capital/VC</option>
                                    <option value="Veterinary">Veterinary</option>
                                    <option value="Warehousing">Warehousing</option>
                                    <option value="Wholesale">Wholesale</option>
                                    <option value="Wine/Spirits">Wine/Spirits</option>
                                    <option value="Wireless">Wireless</option>
                                    <option value="Writing/Editing">Writing/Editing</option>
                                </select>
                                <!--                <span class="badge rounded-pill text-bg-primary">{{ this.q8 }}</span>-->
                                <!--              <div>Value: {{ q7 }}</div>-->
                            </div>
                        </div>

                        <div class="shadow-lg p-3 mb-5 bg-body-tertiary rounded">
                            <div class="mb-3">
                                <label for="phase1-q12" class="form-label"><h2>7</h2>What is your age?</label>
                                <div class="range">
                                    <input class="form-control" type="text" placeholder="29"
                                           aria-label="default input example" v-model="this.q12">
                                </div>
                                <!--                <span class="badge rounded-pill text-bg-primary">{{ this.q9 }}</span>-->
                                <!--              <div>Value: {{ q7 }}</div>-->
                            </div>
                        </div>

                        <div class="mb-5">
                            <a class="btn btn-primary btn-lg px-4" v-on:click="send_phase_one_results">Submit and
                                Next</a>
                        </div>
                    </form>
                </div>
                <div class="col d-flex align-items-center">
                    <!--          <img :src="image_src" style="margin: 0 auto;"/>-->
                </div>
            </div>
        </div>
    </main>
    <div class="container">
        <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
            <div class="col-md-4 d-flex align-items-center">
                <a href="/frontend/public" class="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
                    <svg class="bi" width="30" height="24">
                        <use xlink:href="#bootstrap"></use>
                    </svg>
                </a>
                <span class="mb-3 mb-md-0 text-muted">Research Group Big Data and Machine learning - Master thesis by Mattes Barkowski</span>
            </div>
        </footer>
    </div>
    </body>
</template>

<script>
import image_univie from '../rsc/images/phase-one/univie-logo.jpg'
import axios from "axios";
import router from "../../../router";


export default {
    name: "phase-one",
    data() {
        return {
            image_src: image_univie,
            q1: 3,
            q2: false,
            q3: "def4",
            q4: 3,
            q5: false,
            q6: 3,
            q7: 3,
            q8: 3,
            q9: "other",
            q10: "not answered",
            q11: "not answered",
            q12: null,
            user_id: localStorage.getItem("user_id"),
            group: localStorage.getItem('group'),
            phase1_start_time: null,
            phase1_end_time: null,
            router
        }
    },
    mounted() {
        // write initialization functions here...
        const timestampInMs = Date.now();

        // Convert the timestamp to the desired format
        const timestampInSeconds = Math.floor(timestampInMs / 1000);
        const decimalPlaces = 7;
        const fractionalSeconds = (timestampInMs / 1000 - timestampInSeconds).toFixed(decimalPlaces).substr(1);
        this.phase1_start_time = `${timestampInSeconds}${fractionalSeconds}`;
        console.log(this.phase1_start_time)
    },
    methods: {
        // write general functions here...

        send_phase_one_results() {
            const ipAddress = window.location.hostname
            // write initialization functions here...
            const timestampInMs = Date.now();

            // Convert the timestamp to the desired format
            const timestampInSeconds = Math.floor(timestampInMs / 1000);
            const decimalPlaces = 7;
            const fractionalSeconds = (timestampInMs / 1000 - timestampInSeconds).toFixed(decimalPlaces).substr(1);
            this.phase1_end_time = `${timestampInSeconds}${fractionalSeconds}`;

            console.log(this.phase1_start_time)
            this.request_body = {
                "group": this.group,
                "ip_address": ipAddress,
                "user_id": this.user_id,
                "start_time": this.phase1_start_time,
                "end_time": this.phase1_end_time,
                "answers": {
                    "phase_1": {
                        "q1": this.q1,
                        "q2": this.q2,
                        "q3": this.q3,
                        "q4": this.q4,
                        "q5": this.q5,
                        "q6": this.q6,
                        "q7": this.q7,
                        "q8": this.q8,
                        "q9": this.q9,
                        "q10": this.q10,
                        "q11": this.q11,
                        "q12": this.q12
                    }
                }
            }

            axios.post('http://3.73.125.175/api/v2/phase-one-processing', this.request_body)
                .then(
                    response => {
                        this.response_body = response.data
                        console.log(JSON.stringify(this.response_body))
                        this.router.push({name: "survey-phase-two-first"})
                    }
                )
                .catch(
                    error => console.log(error)
                )

            //TODO: define start_timestamp for the user clicks the 'start' button


        },

    }
}

</script>

<style scoped>

.bd-placeholder-img {
    font-size: 1.125rem;
    text-anchor: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
}

@media (min-width: 768px) {
    .bd-placeholder-img-lg {
        font-size: 3.5rem;
    }
}

.b-example-divider {
    height: 3rem;
    background-color: rgba(0, 0, 0, .1);
    border: solid rgba(0, 0, 0, .15);
    border-width: 1px 0;
    box-shadow: inset 0 .5em 1.5em rgba(0, 0, 0, .1), inset 0 .125em .5em rgba(0, 0, 0, .15);
}

.b-example-vr {
    flex-shrink: 0;
    width: 1.5rem;
    height: 100vh;
}

.bi {
    vertical-align: -.125em;
    fill: currentColor;
}

.nav-scroller {
    position: relative;
    z-index: 2;
    height: 2.75rem;
    overflow-y: hidden;
}

.nav-scroller .nav {
    display: flex;
    flex-wrap: nowrap;
    padding-bottom: 1rem;
    margin-top: -1px;
    overflow-x: auto;
    text-align: center;
    white-space: nowrap;
    -webkit-overflow-scrolling: touch;
}


#indented_right {
    margin-left: 70px;
}
</style>
