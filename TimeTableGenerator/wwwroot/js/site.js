window.onload = function () {
    $("#generateTbl").show();
    $("#subjectContainer, #dynamicTableContanier").hide();
    $("#WorkingDays, #SubjectsPerDay, #TotalSubjects").val(0);
};

//--- Reset function ----
function Reset() {
    if ($("#subjectContainer").show()) {
        $("#generateTbl").show();
        $("#subjectContainer, #dynamicTableContanier").hide();
        $("#WorkingDays, #SubjectsPerDay, #TotalSubjects").val(0);
        $("#messageDiv").text("✨ Create Your Perfect Schedule in Minutes ✨");
        $("#mainTitle").text("Timetable Generator : Plan Your Day");
    }
}

//--- Total Hours Count function ----
function totalHours() {
    const msg = $("#messageDiv");
    const _workingDays = $("#WorkingDays").val();
    const _subjectsPerDay = $("#SubjectsPerDay").val();
    const _TotalSubjects = $("#TotalSubjects").val();
    
    const totalHours = _workingDays * _subjectsPerDay;
    if (_TotalSubjects === 0 || _TotalSubjects === null) {
        $("#messageDiv").text("✨ Create Your Perfect Schedule in Minutes ✨");
    }
    msg.text(`Total Hours For Week ${totalHours}`);
    $("#totalHours").val(totalHours);
}


//--- Submit Subjects Ajex function ----
function SubmitSubjects() {
    let getHours = $(".hours");
    const _workingDays = parseInt($("#WorkingDays").val()) || 0;
    const _subjectsPerDay = parseInt($("#SubjectsPerDay").val()) || 0;

    const TotalHours = [];
    let sum = 0;

    try {
        for (let i = 0; i < getHours.length; i++) {
            let hourValue = getHours[i].value.trim();
            if (hourValue === "" || isNaN(hourValue) || hourValue < 0) {
                $.notify("Invalid hour value", "error");
            } else {
                TotalHours.push(parseFloat(hourValue));
                sum += parseInt(hourValue);
            }
        }
    } catch (error) {
        $.notify("An error occurred while submitting subjects");
    }

    let getTotalHoursDy = _workingDays * _subjectsPerDay;
    if (sum === getTotalHoursDy) {
        const formData = $("#subjectFrm").serialize();
        if (!$("#subjectFrm").valid()) { return; }

        $.ajax({
            url: "/Home/GenerateTimeTable",
            type: "POST",
            data: formData,
            success: function (response) {
                $.notify("Data Submitted Successfully!", "success");
                $("#generateTbl, #subjectContainer").hide();
                $("#dynamicTableContanier").html(response).show();
                $("#mainTitle").text("📅 Organize Your Subjects");
            },
            error: function (error) {
                $.notify("Failed to Submit Data", "error");
            }
        });
    } else {
        $.notify(`Total Hours For Week should be ${getTotalHoursDy}, but you entered ${sum}.`, "error");
    }

}

//--- User Inset Detail Ajex function ----
function Inset() {
    let inputDetail = $("#generateTbl").serialize();
    if (!$("#generateTbl").valid()) { return; }

    $.ajax({
        url: "/Home/GetSubject",
        type: 'POST',
        data: inputDetail,
        success: function (data) {
            $("#generateTbl").hide();
            $("#subjectContainer").html(data).show();
            $("#mainTitle").text("Your Custom Study Plan");
        },
        error: function (xhr, status, error) {
            console.log("Error: " + error);
        }
    });
}
