def solution(id_list, report, k):    
    # 신고 목록 dictionary
    report_dict = {}    # key: 신고 당한 ID, value: 신고한 ID
    for people in set(report):
        report_from, report_to = people.split()
        if report_to in report_dict:
            report_dict[report_to].append(report_from)
        else:
            report_dict[report_to] = [report_from]
    
    # k 이상 -> 메일 발송 횟수 dictionary
    mail_dict = {key: 0 for key in id_list} # key: id_list, value: 메일 수신 횟수
    for report_to in report_dict:
        if len(report_dict[report_to]) >= k:
            for report_from in report_dict[report_to]:
                mail_dict[report_from] += 1
    
    return list(mail_dict.values())